/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const DAILY_RATE = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  let totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    totalCost -= LONG_TERM_DISCOUNT;

    return totalCost;
  }

  if (days >= SHORT_TERM) {
    totalCost -= SHORT_TERM_DISCOUNT;

    return totalCost;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
