import { useFormContext } from "react-hook-form";
import type { ContactFormValues } from "../../../utils/contactFormSchema";
import { HEADCOUNT_FIELDS } from "../../../utils/contactFormSchema";
import type { ContactTranslations } from "../../../utils/translations";
import FormField, { inputClasses } from "./FormField";

interface StepTripDetailsProps {
  t: ContactTranslations["form"]["step1"];
}

export default function StepTripDetails({ t }: StepTripDetailsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactFormValues>();

  return (
    <div>
      <h3 className="font-brevia text-xl font-semibold text-accent-900">
        {t.title}
      </h3>
      <p className="mt-1.5 text-accent-700">{t.description}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
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

        <FormField htmlFor="companyName" label={t.fields.companyName.label}>
          <input
            id="companyName"
            type="text"
            placeholder={t.fields.companyName.placeholder}
            className={inputClasses(!!errors.companyName)}
            {...register("companyName")}
          />
        </FormField>

        <FormField
          htmlFor="checkInDate"
          label={t.fields.checkInDate.label}
          error={errors.checkInDate?.message}
        >
          <input
            id="checkInDate"
            type="date"
            className={inputClasses(!!errors.checkInDate)}
            {...register("checkInDate")}
          />
        </FormField>

        <FormField
          htmlFor="checkOutDate"
          label={t.fields.checkOutDate.label}
          error={errors.checkOutDate?.message}
        >
          <input
            id="checkOutDate"
            type="date"
            className={inputClasses(!!errors.checkOutDate)}
            {...register("checkOutDate")}
          />
        </FormField>

        {HEADCOUNT_FIELDS.map((field) => (
          <FormField
            key={field}
            htmlFor={field}
            label={t.fields[field].label}
            error={errors[field]?.message}
          >
            <input
              id={field}
              type="number"
              min={0}
              step={1}
              className={inputClasses(!!errors[field])}
              {...register(field)}
            />
          </FormField>
        ))}
      </div>
    </div>
  );
}
