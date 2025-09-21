/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAY_RENT_COST = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT_TERM = 3;
  const BIG_DISCOUNT_TERM = 7;

  if (days >= SMALL_DISCOUNT_TERM && days < BIG_DISCOUNT_TERM) {
    return days * DAY_RENT_COST - SMALL_DISCOUNT;
  }

  if (days >= BIG_DISCOUNT_TERM) {
    return days * DAY_RENT_COST - BIG_DISCOUNT;
  }

  return days * DAY_RENT_COST;
}

module.exports = calculateRentalCost;
