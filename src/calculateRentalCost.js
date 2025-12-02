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

  const normalizedDays = Math.floor(days);

  if (!Number.isFinite(normalizedDays) || normalizedDays <= 0) {
    return 0;
  }

  if (normalizedDays < SHORT_TERM) {
    return normalizedDays * DAILY_RATE;
  }

  if (normalizedDays < LONG_TERM) {
    return normalizedDays * DAILY_RATE - SHORT_TERM_DISCOUNT;
  }

  return normalizedDays * DAILY_RATE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
