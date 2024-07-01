/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const result = DAILY_RENTAL_COST * days;

  const DAYS_FOR_BIG_DISCOUNT = 7;
  const BIG_DISCOUNT = 50;
  const DAYS_FOR_SMALL_DISCOUNT = 3;
  const SMALL_DISCOUNT = 20;

  if (days >= DAYS_FOR_BIG_DISCOUNT) {
    return result - BIG_DISCOUNT;
  }

  if (days >= DAYS_FOR_SMALL_DISCOUNT) {
    return result - SMALL_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
