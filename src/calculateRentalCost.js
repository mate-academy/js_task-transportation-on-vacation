/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENTAL_COST = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const SMALL_VOCATION = 3;
  const BIG_VOCATION = 7;
  const TOTAL_RENTAL_COST = days * DAY_RENTAL_COST;

  if (days < SMALL_VOCATION) {
    return TOTAL_RENTAL_COST;
  }

  if (days >= SMALL_VOCATION && days < BIG_VOCATION) {
    return TOTAL_RENTAL_COST - SMALL_DISCOUNT;
  }

  if (days >= BIG_VOCATION) {
    return TOTAL_RENTAL_COST - BIG_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
