/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const DISCOUNT_FOR_3_DAYS = 20;
  const DISCOUNT_FOR_7_DAYS = 50;

  const totalCost = days * DAILY_RENTAL_COST;

  if (days >= 7) {
    return totalCost - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= 3) {
    return totalCost - DISCOUNT_FOR_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
