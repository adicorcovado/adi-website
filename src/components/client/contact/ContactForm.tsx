import { useMemo, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";
import { motion } from "motion/react";
import { HiCheck } from "react-icons/hi2";
import {
  buildContactMessageSchema,
  CONTACT_MESSAGE_DEFAULT_VALUES,
  type ContactMessageFormValues,
} from "../../../utils/contactMessageSchema";
import type { ContactTranslations } from "../../../utils/translations";
import Turnstile, { type TurnstileHandle } from "../Turnstile";
import FormField, { inputClasses } from "./FormField";

interface ContactFormProps {
  t: ContactTranslations["form"];
  lang: string;
  turnstileSiteKey: string;
}

export default function ContactForm({
  t,
  lang,
  turnstileSiteKey,
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileHandle>(null);

  const schema = useMemo(() => buildContactMessageSchema(t.errors), [t.errors]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactMessageFormValues>({
    resolver: zodResolver(schema) as Resolver<ContactMessageFormValues>,
    defaultValues: CONTACT_MESSAGE_DEFAULT_VALUES,
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (data) => {
    setSubmitError(null);

    if (!captchaToken) {
      setSubmitError(t.errors.captchaRequired);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang, turnstileToken: captchaToken }),
      });
      if (!response.ok) throw new Error("Contact request failed");
      setIsSubmitted(true);
    } catch {
      setSubmitError(t.errors.submitError);
    } finally {
      setCaptchaToken(null);
      turnstileRef.current?.reset();
    }
  });

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <HiCheck className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-brevia text-2xl font-semibold text-accent-900">
          {t.success.title}
        </h3>
        <p className="mt-2 text-accent-700">{t.success.description}</p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-10">
      <form onSubmit={onSubmit} noValidate className="grid gap-5">
        <FormField
          htmlFor="name"
          label={t.fields.name.label}
          error={errors.name?.message}
        >
          <input
            id="name"
            type="text"
            placeholder={t.fields.name.placeholder}
            className={inputClasses(!!errors.name)}
            {...register("name")}
          />
        </FormField>

        <FormField
          htmlFor="email"
          label={t.fields.email.label}
          error={errors.email?.message}
        >
          <input
            id="email"
            type="email"
            placeholder={t.fields.email.placeholder}
            className={inputClasses(!!errors.email)}
            {...register("email")}
          />
        </FormField>

        <FormField
          htmlFor="comment"
          label={t.fields.comment.label}
          error={errors.comment?.message}
        >
          <textarea
            id="comment"
            rows={5}
            placeholder={t.fields.comment.placeholder}
            className={inputClasses(!!errors.comment)}
            {...register("comment")}
          />
        </FormField>

        <Turnstile
          ref={turnstileRef}
          siteKey={turnstileSiteKey}
          onVerify={setCaptchaToken}
          onExpire={() => setCaptchaToken(null)}
          onError={() => setCaptchaToken(null)}
        />

        {submitError && (
          <p className="text-sm text-danger-600" role="alert">
            {submitError}
          </p>
        )}

        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600 disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? t.buttons.submitting : t.buttons.submit}
          </button>
        </div>
      </form>
    </div>
  );
}
