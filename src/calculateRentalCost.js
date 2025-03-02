/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const DISCOUNT_3_TO_6_DAYS = 20;
  const DISCOUNT_7_OR_MORE_DAYS = 50;
  const DAYS_FOR_20_DISCOUNT = 3;
  const DAYS_FOR_50_DISCOUNT = 7;

  const totalCost = days * DAILY_RENT;

  if (days < DAYS_FOR_20_DISCOUNT) {
    return totalCost;
  }

  if (days < DAYS_FOR_50_DISCOUNT) {
    return totalCost - DISCOUNT_3_TO_6_DAYS;
  }

  return totalCost - DISCOUNT_7_OR_MORE_DAYS;
}

module.exports = calculateRentalCost;
