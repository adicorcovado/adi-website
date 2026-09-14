import { useFormContext } from "react-hook-form";
import {
  ID_TYPES,
  PAYMENT_METHODS,
  type ContactFormValues,
} from "../../../utils/contactFormSchema";
import type { BookingTranslations } from "../../../utils/translations";
import FormField, { inputClasses } from "./FormField";

interface StepRequesterDetailsProps {
  t: BookingTranslations["form"]["step1"];
}

export default function StepRequesterDetails({ t }: StepRequesterDetailsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactFormValues>();

  return (
    <div>
      <h3 className="font-brevia text-xl font-bold text-primary-500">
        {t.title}
      </h3>
      <p className="mt-1.5 text-accent-700 text-lg">{t.description}</p>

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
          htmlFor="idType"
          label={t.fields.idType.label}
          error={errors.idType?.message}
        >
          <select
            id="idType"
            className={inputClasses(!!errors.idType)}
            defaultValue=""
            {...register("idType")}
          >
            <option value="" disabled>
              {t.fields.idType.placeholder}
            </option>
            {ID_TYPES.map((idType) => (
              <option key={idType} value={idType}>
                {t.fields.idType.options[idType]}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          htmlFor="idNumber"
          label={t.fields.idNumber.label}
          error={errors.idNumber?.message}
        >
          <input
            id="idNumber"
            type="text"
            placeholder={t.fields.idNumber.placeholder}
            className={inputClasses(!!errors.idNumber)}
            {...register("idNumber")}
          />
        </FormField>

        <FormField
          htmlFor="paymentMethod"
          label={t.fields.paymentMethod.label}
          error={errors.paymentMethod?.message}
          helpText={t.fields.paymentMethod.helpText}
        >
          <select
            id="paymentMethod"
            className={inputClasses(!!errors.paymentMethod)}
            defaultValue=""
            {...register("paymentMethod")}
          >
            <option value="" disabled>
              {t.fields.paymentMethod.placeholder}
            </option>
            {PAYMENT_METHODS.map((paymentMethod) => (
              <option key={paymentMethod} value={paymentMethod}>
                {t.fields.paymentMethod.options[paymentMethod]}
              </option>
            ))}
          </select>
        </FormField>
      </div>
    </div>
  );
}
