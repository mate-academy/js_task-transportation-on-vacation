/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const BASE_COST = 40;
  const LONG_DISCOUNT = 50;
  const SHORT_DISCOUNT = 20;
  const LONG_VACATION = 7;
  const SHORT_VACATION = 3;

  const totalCost = days * BASE_COST;

  if (days >= LONG_VACATION) {
    return totalCost - LONG_DISCOUNT;
  }

  if (days >= SHORT_VACATION) {
    return totalCost - SHORT_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
