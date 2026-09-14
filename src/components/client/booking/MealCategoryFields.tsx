import { useFormContext } from "react-hook-form";
import type {
  ContactFormValues,
  HeadcountField,
  MealType,
} from "../../../utils/contactFormSchema";
import type { BookingTranslations } from "../../../utils/translations";
import FormField, { inputClasses } from "./FormField";

interface MealCategoryFieldsProps {
  dayKey: string;
  mealType: MealType;
  title: string;
  fieldLabels: BookingTranslations["form"]["step3"]["fields"];
  activeFields: readonly HeadcountField[];
}

export default function MealCategoryFields({
  dayKey,
  mealType,
  title,
  fieldLabels,
  activeFields,
}: MealCategoryFieldsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactFormValues>();

  const mealErrors = errors.meals?.[dayKey]?.[mealType];

  return (
    <fieldset className="rounded-xl border border-accent-100 p-5">
      <legend className="px-1 font-brevia text-lg font-semibold text-accent-900">
        {title}
      </legend>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {activeFields.map((field) => {
          const id = `meals.${dayKey}.${mealType}.${field}`;
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
                placeholder="0"
                className={inputClasses(!!mealErrors?.[field])}
                {...register(`meals.${dayKey}.${mealType}.${field}`)}
              />
            </FormField>
          );
        })}
      </div>
    </fieldset>
  );
}
