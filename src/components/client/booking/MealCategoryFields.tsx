import { useFormContext } from "react-hook-form";
import type { ContactFormValues, MealType } from "../../../utils/contactFormSchema";
import { HEADCOUNT_FIELDS } from "../../../utils/contactFormSchema";
import type { BookingTranslations } from "../../../utils/translations";
import FormField, { inputClasses } from "./FormField";

interface MealCategoryFieldsProps {
  mealType: MealType;
  title: string;
  fieldLabels: BookingTranslations["form"]["step2"]["fields"];
}

export default function MealCategoryFields({
  mealType,
  title,
  fieldLabels,
}: MealCategoryFieldsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactFormValues>();

  const mealErrors = errors.meals?.[mealType];

  return (
    <fieldset className="rounded-xl border border-accent-100 p-5">
      <legend className="px-1 font-brevia text-lg font-semibold text-accent-900">
        {title}
      </legend>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {HEADCOUNT_FIELDS.map((field) => {
          const id = `meals.${mealType}.${field}`;
          return (
            <FormField
              key={id}
              htmlFor={id}
              label={fieldLabels[field].label}
              error={mealErrors?.[field]?.message}
            >
              <input
                id={id}
                type="number"
                min={0}
                step={1}
                className={inputClasses(!!mealErrors?.[field])}
                {...register(`meals.${mealType}.${field}`)}
              />
            </FormField>
          );
        })}
      </div>
    </fieldset>
  );
}
