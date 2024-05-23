/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_FOR_WEEK = 50;
  const DISCOUNT_FOR_THREE_DAYS = 20;
  const DAYS_FOR_WEEK_DISCOUNT = 7;
  const DAYS_FOR_THREE_DAYS_DISCOUNT = 3;

  let totalCost = days * COST_PER_DAY;

  if (days >= DAYS_FOR_WEEK_DISCOUNT) {
    totalCost -= DISCOUNT_FOR_WEEK;
  } else if (days >= DAYS_FOR_THREE_DAYS_DISCOUNT) {
    totalCost -= DISCOUNT_FOR_THREE_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
