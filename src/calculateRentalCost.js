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
  const dailyRate = 40;
  const totalRentalCost = dailyRate * days;

  if (days >= LONG_TERM) {
    return totalRentalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalRentalCost - SHORT_TERM_DISCOUNT;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
