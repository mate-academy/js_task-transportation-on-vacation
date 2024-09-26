/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const regularRate = 40;
  let totalCost = days * regularRate;

  if (days >= LONG_TERM) {
    totalCost -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    totalCost -= SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
