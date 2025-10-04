/**
 * @param {number} days
 *
 * @return {number}
 */

/**
    [CHECKLIST ITEM #2] Avoid hardcoded literals in expressions. In src/calculateRentalCost.js, replace numeric literals like 7, 3, 50, 20, and the daily rate with descriptive constants (e.g., DAILY_RATE, LONG_TERM_DAYS, SHORT_TERM_DAYS, LONG_TERM_DISCOUNT, SHORT_TERM_DISCOUNT). This improves readability and ensures values are not scattered as magic numbers.
    [CHECKLIST ITEM #4] Prefer early returns over if ... else if. Compute a const basePrice = DAILY_RATE * days; and then use early returns: if (days >= LONG_TERM_DAYS) return basePrice - LONG_TERM_DISCOUNT; if (days >= SHORT_TERM_DAYS) return basePrice - SHORT_TERM_DISCOUNT; return basePrice;. This also lets you avoid mutable variables and adhere to [CHECKLIST ITEM #3] (prefer const).
 */

function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_DAYS = 7;
  const SHORT_TERM_DAYS = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = DAILY_RATE * days;

  if (days >= LONG_TERM_DAYS) return basePrice - LONG_TERM_DISCOUNT;
  if (days >= SHORT_TERM_DAYS) return basePrice - SHORT_TERM_DISCOUNT;
  return basePrice;
}

module.exports = calculateRentalCost;
