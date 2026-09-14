import { z } from "zod";

export const MEAL_TYPES = ["breakfast", "snack", "lunch", "dinner"] as const;
export const HEADCOUNT_FIELDS = [
  "adults",
  "children",
  "guides",
  "volunteers",
  "researchers",
] as const;
export const ID_TYPES = ["cedulaFisica", "cedulaJuridica", "pasaporte"] as const;
export const PAYMENT_METHODS = [
  "bankDeposit",
  "electronicTransfer",
  "creditDebitCard",
] as const;

export type MealType = (typeof MEAL_TYPES)[number];
export type HeadcountField = (typeof HEADCOUNT_FIELDS)[number];
export type IdType = (typeof ID_TYPES)[number];
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

const MAX_STAY_DAYS = 60;

export const MIN_ENTRANCE_FEE_PROOFS = 1;
export const MAX_ENTRANCE_FEE_PROOFS = 4;

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
  idTypeRequired: string;
  idNumberRequired: string;
  paymentMethodRequired: string;
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
      idType: z.enum(ID_TYPES, { message: messages.idTypeRequired }),
      idNumber: z.string().trim().min(1, messages.idNumberRequired),
      paymentMethod: z.enum(PAYMENT_METHODS, {
        message: messages.paymentMethodRequired,
      }),
      checkInDate: z.string().min(1, messages.checkInRequired),
      checkOutDate: z.string().min(1, messages.checkOutRequired),
      ...headcountShape,
      meals: z.record(z.string(), mealDaySchema),
      entranceFeeProofs: z
        .array(
          z.custom<File>((value) => value instanceof File && value.size > 0),
        )
        .min(MIN_ENTRANCE_FEE_PROOFS, messages.fileRequired),
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
  idType: "",
  idNumber: "",
  paymentMethod: "",
  checkInDate: "",
  checkOutDate: "",
  ...emptyHeadcount,
  meals: {},
  entranceFeeProofs: [],
} as unknown as ContactFormValues;

export const STEP_FIELDS: Array<Array<keyof ContactFormValues>> = [
  ["name", "email", "companyName", "idType", "idNumber", "paymentMethod"],
  [
    "checkInDate",
    "checkOutDate",
    "adults",
    "children",
    "guides",
    "volunteers",
    "researchers",
  ],
  ["meals"],
  ["entranceFeeProofs"],
];
