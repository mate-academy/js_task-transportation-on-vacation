/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const DISCOUNT_3_OR_MORE_DAYS = 20;
  const DISCOUNT_7_OR_MORE_DAYS = 50;

  const totalCost = days * DAILY_RENTAL_COST;

  if (days >= 7) {
    return totalCost - DISCOUNT_7_OR_MORE_DAYS;
  } else if (days >= 3) {
    return totalCost - DISCOUNT_3_OR_MORE_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
