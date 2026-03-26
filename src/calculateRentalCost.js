export function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const SHORT_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;
  const DISCOUNT_FOR_3_DAYS = 20;
  const DISCOUNT_FOR_7_DAYS = 50;

  const total = days * DAILY_RATE;

  if (days >= LONG_TERM_DAYS) {
    return total - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= SHORT_TERM_DAYS) {
    return total - DISCOUNT_FOR_3_DAYS;
  }

  return total;
}
