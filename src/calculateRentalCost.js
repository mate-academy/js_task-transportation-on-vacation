/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const dailyRate = 40;
  let totalCost = days * dailyRate;

  if (days >= LONG_TERM) {
    totalCost -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    totalCost -= SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
