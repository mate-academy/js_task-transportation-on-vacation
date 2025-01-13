/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const MIN_DAYS_FOR_SMALL_DISCOUNT = 3;
  const MIN_DAYS_FOR_BIG_DISCOUNT = 7;

  if (days >= MIN_DAYS_FOR_BIG_DISCOUNT) {
    return days * DAY_PRICE - BIG_DISCOUNT;
  }

  if (days >= MIN_DAYS_FOR_SMALL_DISCOUNT) {
    return days * DAY_PRICE - SMALL_DISCOUNT;
  }

  return days * DAY_PRICE;
}

module.exports = calculateRentalCost;
