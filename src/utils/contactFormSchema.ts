import { z } from "zod";

export const MEAL_TYPES = ["breakfast", "snack", "lunch", "dinner"] as const;
export const HEADCOUNT_FIELDS = [
  "adults",
  "children",
  "guides",
  "volunteers",
  "researchers",
] as const;

export type MealType = (typeof MEAL_TYPES)[number];
export type HeadcountField = (typeof HEADCOUNT_FIELDS)[number];

const MAX_STAY_DAYS = 60;

/** Every calendar day of the stay (`YYYY-MM-DD`, both ends inclusive), capped at `MAX_STAY_DAYS`. */
export function getStayDays(checkInDate: string, checkOutDate: string): string[] {
  if (!checkInDate || !checkOutDate) return [];

  const start = new Date(`${checkInDate}T00:00:00Z`);
  const end = new Date(`${checkOutDate}T00:00:00Z`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) {
    return [checkInDate];
  }

  const days: string[] = [];
  const cursor = new Date(start);
  while (cursor.getTime() <= end.getTime() && days.length < MAX_STAY_DAYS) {
    days.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return days;
}

export interface ContactFormMessages {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  checkInRequired: string;
  checkOutRequired: string;
  dateOrder: string;
  countMin: string;
  fileRequired: string;
}

export function buildContactFormSchema(messages: ContactFormMessages) {
  const count = z.coerce.number().int().min(0, messages.countMin);

  const headcountShape = HEADCOUNT_FIELDS.reduce(
    (shape, field) => {
      shape[field] = count;
      return shape;
    },
    {} as Record<HeadcountField, typeof count>,
  );

  // Only the headcount categories selected in step 1 get rendered per meal per
  // day, so the rest are never registered — default them to 0 instead of
  // requiring every category on every meal/day combination.
  const mealCount = count.default(0);
  const mealHeadcountShape = HEADCOUNT_FIELDS.reduce(
    (shape, field) => {
      shape[field] = mealCount;
      return shape;
    },
    {} as Record<HeadcountField, typeof mealCount>,
  );

  const mealCategorySchema = z.object(mealHeadcountShape);

  const mealDayShape = MEAL_TYPES.reduce(
    (shape, meal) => {
      shape[meal] = mealCategorySchema;
      return shape;
    },
    {} as Record<MealType, typeof mealCategorySchema>,
  );

  const mealDaySchema = z.object(mealDayShape);

  return z
    .object({
      name: z.string().trim().min(1, messages.nameRequired),
      email: z
        .string()
        .trim()
        .min(1, messages.emailRequired)
        .email(messages.emailInvalid),
      companyName: z.string().trim().optional(),
      checkInDate: z.string().min(1, messages.checkInRequired),
      checkOutDate: z.string().min(1, messages.checkOutRequired),
      ...headcountShape,
      meals: z.record(z.string(), mealDaySchema),
      entranceFeeProof: z.custom<File>(
        (value) => value instanceof File && value.size > 0,
        { message: messages.fileRequired },
      ),
    })
    .refine(
      (data) =>
        !data.checkInDate ||
        !data.checkOutDate ||
        new Date(data.checkOutDate) >= new Date(data.checkInDate),
      { message: messages.dateOrder, path: ["checkOutDate"] },
    );
}

export type ContactFormValues = z.infer<ReturnType<typeof buildContactFormSchema>>;

const emptyHeadcount = HEADCOUNT_FIELDS.reduce(
  (fields, field) => {
    fields[field] = 0;
    return fields;
  },
  {} as Record<HeadcountField, number>,
);

export const CONTACT_FORM_DEFAULT_VALUES = {
  name: "",
  email: "",
  companyName: "",
  checkInDate: "",
  checkOutDate: "",
  ...emptyHeadcount,
  meals: {},
  entranceFeeProof: undefined,
} as unknown as ContactFormValues;

export const STEP_FIELDS: Array<Array<keyof ContactFormValues>> = [
  [
    "name",
    "email",
    "companyName",
    "checkInDate",
    "checkOutDate",
    "adults",
    "children",
    "guides",
    "volunteers",
    "researchers",
  ],
  ["meals"],
  ["entranceFeeProof"],
];
