import { useMemo, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type Resolver } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";
import {
  HiCheck,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import {
  buildContactFormSchema,
  CONTACT_FORM_DEFAULT_VALUES,
  HEADCOUNT_FIELDS,
  MEAL_TYPES,
  STEP_FIELDS,
  type ContactFormValues,
} from "../../../utils/contactFormSchema";
import type { BookingTranslations } from "../../../utils/translations";
import ConfirmDialog from "../ConfirmDialog";
import Turnstile, { type TurnstileHandle } from "../Turnstile";
import StepTripDetails from "./StepTripDetails";
import StepMeals from "./StepMeals";
import StepDocuments from "./StepDocuments";

interface BookingWizardProps {
  t: BookingTranslations["form"];
  lang: string;
  turnstileSiteKey: string;
}

const TOTAL_STEPS = 3;
const MEALS_STEP_INDEX = 1;

function hasNoMeals(meals: ContactFormValues["meals"]): boolean {
  return MEAL_TYPES.every((mealType) =>
    HEADCOUNT_FIELDS.every((field) => Number(meals[mealType][field]) === 0),
  );
}

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 32 : -32, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -32 : 32, opacity: 0 }),
};

function buildBookingFormData(
  data: ContactFormValues,
  lang: string,
  turnstileToken: string,
): FormData {
  const formData = new FormData();
  formData.set("name", data.name);
  formData.set("email", data.email);
  formData.set("companyName", data.companyName ?? "");
  formData.set("checkInDate", data.checkInDate);
  formData.set("checkOutDate", data.checkOutDate);
  formData.set("lang", lang);
  formData.set("turnstileToken", turnstileToken);
  for (const field of [
    "adults",
    "children",
    "guides",
    "volunteers",
    "researchers",
  ] as const) {
    formData.set(field, String(data[field]));
  }
  formData.set("meals", JSON.stringify(data.meals));
  formData.set("entranceFeeProof", data.entranceFeeProof);
  return formData;
}

export default function BookingWizard({
  t,
  lang,
  turnstileSiteKey,
}: BookingWizardProps) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showNoMealsWarning, setShowNoMealsWarning] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileHandle>(null);

  const schema = useMemo(() => buildContactFormSchema(t.errors), [t.errors]);

  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(schema) as Resolver<ContactFormValues>,
    defaultValues: CONTACT_FORM_DEFAULT_VALUES,
    mode: "onBlur",
  });

  const goToStep = (nextStep: number) => {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
  };

  const handleNext = async () => {
    const isValid = await methods.trigger(STEP_FIELDS[step]);
    if (!isValid) return;

    if (step === MEALS_STEP_INDEX && hasNoMeals(methods.getValues("meals"))) {
      setShowNoMealsWarning(true);
      return;
    }

    goToStep(step + 1);
  };

  const handleConfirmNoMeals = () => {
    setShowNoMealsWarning(false);
    goToStep(step + 1);
  };

  const onSubmit = methods.handleSubmit(async (data) => {
    setSubmitError(null);

    if (!captchaToken) {
      setSubmitError(t.errors.captchaRequired);
      return;
    }

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        body: buildBookingFormData(data, lang, captchaToken),
      });
      if (!response.ok) throw new Error("Booking request failed");
      setIsSubmitted(true);
    } catch {
      setSubmitError(t.errors.submitError);
    } finally {
      setCaptchaToken(null);
      turnstileRef.current?.reset();
    }
  });

  const handlePrimaryAction = () => {
    if (step < TOTAL_STEPS - 1) {
      void handleNext();
    } else {
      void onSubmit();
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <HiCheck className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-brevia text-2xl font-semibold text-accent-900">
          {t.success.title}
        </h3>
        <p className="mt-2 text-accent-700">{t.success.description}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-10">
      <ol className="mb-8 flex items-center">
        {t.steps.map((stepInfo, index) => (
          <li
            key={stepInfo.title}
            className="flex flex-1 items-center last:flex-none"
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                  index < step
                    ? "bg-primary-500 text-white"
                    : index === step
                      ? "bg-primary-500 text-white"
                      : "bg-accent-50 text-accent-400",
                ].join(" ")}
              >
                {index < step ? <HiCheck className="h-5 w-5" /> : index + 1}
              </div>
              <span
                className={[
                  "hidden text-md font-semibold sm:block",
                  index <= step ? "text-accent-900" : "text-accent-400",
                ].join(" ")}
              >
                {stepInfo.title}
              </span>
            </div>
            {index < t.steps.length - 1 && (
              <div className="mx-2 h-0.5 flex-1 bg-accent-50 sm:mx-4">
                <motion.div
                  className="h-full bg-primary-500"
                  initial={false}
                  animate={{ width: index < step ? "100%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            )}
          </li>
        ))}
      </ol>

      <FormProvider {...methods}>
        <form onSubmit={onSubmit} noValidate>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {step === 0 && <StepTripDetails t={t.step1} />}
                {step === 1 && <StepMeals t={t.step2} />}
                {step === 2 && <StepDocuments t={t.step3} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {step === TOTAL_STEPS - 1 && (
            <Turnstile
              ref={turnstileRef}
              siteKey={turnstileSiteKey}
              onVerify={setCaptchaToken}
              onExpire={() => setCaptchaToken(null)}
              onError={() => setCaptchaToken(null)}
              className="mt-6"
            />
          )}

          {submitError && (
            <p className="mt-6 text-sm text-danger-600" role="alert">
              {submitError}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-accent-50 pt-6">
            <button
              type="button"
              onClick={() => goToStep(step - 1)}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-primary-50 disabled:pointer-events-none disabled:opacity-0 cursor-pointer"
            >
              <HiOutlineArrowLeft className="h-4 w-4" />
              {t.buttons.back}
            </button>

            <button
              type="button"
              onClick={handlePrimaryAction}
              disabled={
                step === TOTAL_STEPS - 1 && methods.formState.isSubmitting
              }
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600 disabled:opacity-70 cursor-pointer"
            >
              {step < TOTAL_STEPS - 1 ? (
                <>
                  {t.buttons.next}
                  <HiOutlineArrowRight className="h-4 w-4" />
                </>
              ) : methods.formState.isSubmitting ? (
                t.buttons.submitting
              ) : (
                t.buttons.submit
              )}
            </button>
          </div>
        </form>
      </FormProvider>

      <ConfirmDialog
        open={showNoMealsWarning}
        title={t.noMealsWarning.title}
        description={t.noMealsWarning.description}
        confirmLabel={t.noMealsWarning.confirm}
        cancelLabel={t.noMealsWarning.cancel}
        onConfirm={handleConfirmNoMeals}
        onCancel={() => setShowNoMealsWarning(false)}
      />
    </div>
  );
}
