/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const DISCOUNT_FOR_THREE_DAYS = 20;
  const DISCOUNT_FOR_SEVEN_DAYS = 50;

  let totalCost = days * DAILY_COST;

  if (days >= 7) {
    totalCost -= DISCOUNT_FOR_SEVEN_DAYS;
  } else if (days >= 3) {
    totalCost -= DISCOUNT_FOR_THREE_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
