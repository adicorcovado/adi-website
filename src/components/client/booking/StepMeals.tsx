import { useEffect, useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import {
  getStayDays,
  HEADCOUNT_FIELDS,
  MEAL_TYPES,
  type ContactFormValues,
} from "../../../utils/contactFormSchema";
import type { BookingTranslations } from "../../../utils/translations";
import Collapse from "../Collapse";
import MealCategoryFields from "./MealCategoryFields";

interface StepMealsProps {
  t: BookingTranslations["form"]["step3"];
  lang: string;
}

export default function StepMeals({ t, lang }: StepMealsProps) {
  const { control, getValues, unregister } = useFormContext<ContactFormValues>();

  const checkInDate = useWatch({ control, name: "checkInDate" });
  const checkOutDate = useWatch({ control, name: "checkOutDate" });
  const headcounts = useWatch({ control, name: HEADCOUNT_FIELDS });

  const days = useMemo(
    () => getStayDays(checkInDate, checkOutDate),
    [checkInDate, checkOutDate],
  );

  const activeFields = useMemo(() => {
    const selected = HEADCOUNT_FIELDS.filter(
      (_field, index) => Number(headcounts[index]) > 0,
    );
    return selected.length > 0 ? selected : HEADCOUNT_FIELDS;
  }, [headcounts]);

  // Days dropped from the stay (e.g. the trip got shorter) keep their
  // registered values around otherwise, so prune anything outside the
  // current range instead of submitting stale per-day meal counts.
  useEffect(() => {
    const currentMeals = getValues("meals") ?? {};
    const staleDays = Object.keys(currentMeals).filter(
      (day) => !days.includes(day),
    );
    if (staleDays.length === 0) return;

    unregister(
      staleDays.flatMap((day) =>
        MEAL_TYPES.flatMap((mealType) =>
          HEADCOUNT_FIELDS.map(
            (field) => `meals.${day}.${mealType}.${field}` as const,
          ),
        ),
      ),
    );
  }, [days, getValues, unregister]);

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(lang === "es" ? "es-CR" : "en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }),
    [lang],
  );

  return (
    <div>
      <h3 className="font-brevia text-xl font-bold text-primary-500">
        {t.title}
      </h3>
      <p className="mt-1.5 text-accent-700 text-lg">{t.description}</p>

      {days.length === 0 ? (
        <p className="mt-6 text-accent-700">{t.missingDatesNotice}</p>
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          {days.map((day, index) => (
            <Collapse
              key={day}
              defaultOpen={index === 0}
              title={t.dayLabel.replace("{number}", String(index + 1))}
              subtitle={dateFormatter.format(new Date(`${day}T00:00:00Z`))}
            >
              <div className="flex flex-col gap-5">
                {MEAL_TYPES.map((mealType) => (
                  <MealCategoryFields
                    key={mealType}
                    dayKey={day}
                    mealType={mealType}
                    title={t.mealTypes[mealType].title}
                    fieldLabels={t.fields}
                    activeFields={activeFields}
                  />
                ))}
              </div>
            </Collapse>
          ))}
        </div>
      )}
    </div>
  );
}
