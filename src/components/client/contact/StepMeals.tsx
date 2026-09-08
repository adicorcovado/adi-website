import { MEAL_TYPES } from "../../../utils/contactFormSchema";
import type { ContactTranslations } from "../../../utils/translations";
import MealCategoryFields from "./MealCategoryFields";

interface StepMealsProps {
  t: ContactTranslations["form"]["step2"];
}

export default function StepMeals({ t }: StepMealsProps) {
  return (
    <div>
      <h3 className="font-brevia text-xl font-semibold text-accent-900">
        {t.title}
      </h3>
      <p className="mt-1.5 text-accent-700">{t.description}</p>

      <div className="mt-6 flex flex-col gap-6">
        {MEAL_TYPES.map((mealType) => (
          <MealCategoryFields
            key={mealType}
            mealType={mealType}
            title={t.mealTypes[mealType].title}
            fieldLabels={t.fields}
          />
        ))}
      </div>
    </div>
  );
}
