/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const DAILY_RENTAL_COST = 40;
  const DISCOUNT_FOR_SEVEN_DAYS_OR_MORE = 50;
  const DISCOUNT_FOR_THREE_DAYS_OR_MORE = 20;
  const DISCOUNT_THRESHOLD_SEVEN_DAYS = 7;
  const DISCOUNT_THRESHOLD_THREE_DAYS = 3;
  const totalCost = numberOfDays * DAILY_RENTAL_COST;

  if (numberOfDays >= DISCOUNT_THRESHOLD_SEVEN_DAYS) {
    return totalCost - DISCOUNT_FOR_SEVEN_DAYS_OR_MORE;
  }

  if (numberOfDays >= DISCOUNT_THRESHOLD_THREE_DAYS) {
    return totalCost - DISCOUNT_FOR_THREE_DAYS_OR_MORE;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
