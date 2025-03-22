/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const SMALL_DISCOUNT = 20;
  const SMALL_DISCOUNT_DAYS = 3;
  const BIG_DISCOUNT = 50;
  const BIG_DISCOUNT_DAYS = 7;

  if (days >= BIG_DISCOUNT_DAYS) {
    return days * DAY_COST - BIG_DISCOUNT;
  } else if (days >= SMALL_DISCOUNT_DAYS) {
    return days * DAY_COST - SMALL_DISCOUNT;
  }

  return days * DAY_COST;
}

module.exports = calculateRentalCost;
