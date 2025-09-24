/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_OF_DAY = 40 * days;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;

  if (days >= 7) {
    return RENT_OF_DAY - BIG_DISCOUNT;
  }

  if (days >= 3) {
    return RENT_OF_DAY - SMALL_DISCOUNT;
  }

  if (days > 0) {
    return RENT_OF_DAY;
  }
}

module.exports = calculateRentalCost;
