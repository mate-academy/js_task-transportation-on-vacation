/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_FOR_WEEK = 50;
  const DISCOUNT_FOR_THREE_DAYS = 20;

  let totalCost = days * COST_PER_DAY;

  if (days >= 7) {
    totalCost -= DISCOUNT_FOR_WEEK;
  } else if (days >= 3) {
    totalCost -= DISCOUNT_FOR_THREE_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
