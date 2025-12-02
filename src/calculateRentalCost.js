/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  // 1) Coerce string numbers (like "3") and validate
  const numericDays = Number(days);

  if (!Number.isFinite(numericDays)) {
    return 0;
  }

  // 2) Floor fractional input
  const normalizedDays = Math.floor(numericDays);

  if (normalizedDays <= 0) {
    return 0;
  }

  // 3) Pricing logic
  if (normalizedDays < SHORT_TERM) {
    return normalizedDays * DAILY_RATE;
  }

  if (normalizedDays < LONG_TERM) {
    return normalizedDays * DAILY_RATE - SHORT_TERM_DISCOUNT;
  }

  return normalizedDays * DAILY_RATE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
