import {
  HEADCOUNT_FIELDS,
  MEAL_TYPES,
  type HeadcountField,
  type MealType,
} from "./contactFormSchema";

export type BookingCurrency = "USD" | "CRC";

export type HeadcountTotals = Record<HeadcountField, number>;
export type MealDayTotals = Record<MealType, HeadcountTotals>;
/** Meal headcounts keyed by stay day (`YYYY-MM-DD`). */
export type MealTotals = Record<string, MealDayTotals>;

interface CategoryRate {
  currency: BookingCurrency;
  /** Price per person, per night, in `currency`. */
  lodgingPerNight: number;
  /** Price per meal serving, in `currency`. Omitted meals aren't offered/priced for this category. */
  meals: Partial<Record<MealType, number>>;
}

/**
 * Rates from ADI Corcovado's official Sirena Station tariff tables (Cuadros 2-4).
 * Researchers/public officials are priced in colones (CRC) per the source table;
 * every other category is priced in USD. Keep in sync if ADI updates the tariffs.
 */
export const BOOKING_RATES: Record<HeadcountField, CategoryRate> = {
  adults: {
    currency: "USD",
    lodgingPerNight: 30,
    meals: { breakfast: 20, snack: 12, lunch: 25, dinner: 25 },
  },
  children: {
    currency: "USD",
    lodgingPerNight: 30,
    meals: { breakfast: 10, snack: 6, lunch: 12.5, dinner: 12.5 },
  },
  guides: {
    currency: "USD",
    lodgingPerNight: 5,
    meals: { breakfast: 5, snack: 6, dinner: 7.5 },
  },
  volunteers: {
    currency: "USD",
    lodgingPerNight: 5,
    meals: { breakfast: 5, snack: 7.5, dinner: 7.5 },
  },
  researchers: {
    currency: "CRC",
    lodgingPerNight: 16500,
    meals: { breakfast: 3200, snack: 7200, dinner: 5150 },
  },
};

export interface BookingLodgingLine {
  category: HeadcountField;
  currency: BookingCurrency;
  count: number;
  unitPrice: number;
  total: number;
}

export interface BookingMealLine extends BookingLodgingLine {
  date: string;
  mealType: MealType;
}

export interface BookingPricing {
  nights: number;
  lodgingLines: BookingLodgingLine[];
  mealLines: BookingMealLine[];
  totalsByCurrency: Partial<Record<BookingCurrency, number>>;
}

/** Whole nights between two `YYYY-MM-DD` dates, floored at 1. */
export function calculateNights(checkInDate: string, checkOutDate: string): number {
  const start = new Date(`${checkInDate}T00:00:00Z`).getTime();
  const end = new Date(`${checkOutDate}T00:00:00Z`).getTime();
  const diffDays = Math.round((end - start) / (1000 * 60 * 60 * 24));
  return Math.max(diffDays, 1);
}

export function calculateBookingPricing(
  headcounts: HeadcountTotals,
  meals: MealTotals,
  nights: number,
  includeLodging: boolean = true,
): BookingPricing {
  const lodgingLines: BookingLodgingLine[] = [];
  const mealLines: BookingMealLine[] = [];
  const totalsByCurrency: Partial<Record<BookingCurrency, number>> = {};

  const addToTotal = (currency: BookingCurrency, amount: number) => {
    totalsByCurrency[currency] = (totalsByCurrency[currency] ?? 0) + amount;
  };

  if (includeLodging) {
    for (const category of HEADCOUNT_FIELDS) {
      const count = headcounts[category];
      if (!count) continue;

      const rate = BOOKING_RATES[category];
      const total = rate.lodgingPerNight * count * nights;
      lodgingLines.push({
        category,
        currency: rate.currency,
        count,
        unitPrice: rate.lodgingPerNight,
        total,
      });
      addToTotal(rate.currency, total);
    }
  }

  for (const date of Object.keys(meals).sort()) {
    const dayMeals = meals[date];
    for (const mealType of MEAL_TYPES) {
      for (const category of HEADCOUNT_FIELDS) {
        const count = dayMeals[mealType]?.[category];
        if (!count) continue;

        const rate = BOOKING_RATES[category];
        const unitPrice = rate.meals[mealType];
        if (!unitPrice) continue;

        const total = unitPrice * count;
        mealLines.push({
          date,
          mealType,
          category,
          currency: rate.currency,
          count,
          unitPrice,
          total,
        });
        addToTotal(rate.currency, total);
      }
    }
  }

  return { nights, lodgingLines, mealLines, totalsByCurrency };
}
