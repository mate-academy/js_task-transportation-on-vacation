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

  let total = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    total -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    total -= SHORT_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
