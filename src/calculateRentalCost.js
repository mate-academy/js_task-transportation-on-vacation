/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_CAR_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const totalSum = days * COST_CAR_PER_DAY;

  if (days >= LONG_TERM) {
    const LONG_TERM_DISCOUNT = 50;

    return totalSum - LONG_TERM_DISCOUNT;
  }
  
  if (days >= SHORT_TERM) {
    const SHORT_TERM_DISCOUNT = 20;

    return totalSum - SHORT_TERM_DISCOUNT;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
