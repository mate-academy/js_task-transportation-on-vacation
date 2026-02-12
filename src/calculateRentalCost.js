/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_DAY_COST = 40;
  const FULL_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;

  if (days >= 7) {
    return days * RENT_DAY_COST - FULL_DISCOUNT;
  }

  if (days >= 3) {
    return days * RENT_DAY_COST - SMALL_DISCOUNT;
  }

  return days * RENT_DAY_COST;
}

module.exports = calculateRentalCost;
