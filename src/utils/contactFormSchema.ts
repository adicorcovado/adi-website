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

  const mealCategorySchema = z.object(headcountShape);

  const mealsShape = MEAL_TYPES.reduce(
    (shape, meal) => {
      shape[meal] = mealCategorySchema;
      return shape;
    },
    {} as Record<MealType, typeof mealCategorySchema>,
  );

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
      meals: z.object(mealsShape),
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
  meals: MEAL_TYPES.reduce(
    (meals, meal) => {
      meals[meal] = { ...emptyHeadcount };
      return meals;
    },
    {} as Record<MealType, Record<HeadcountField, number>>,
  ),
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
