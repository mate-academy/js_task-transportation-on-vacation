/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const ONE_DAY_PRICE = 40;

  if (days >= 7) {
    return days * ONE_DAY_PRICE - BIG_DISCOUNT;
  }

  if (days >= 3) {
    return days * ONE_DAY_PRICE - SMALL_DISCOUNT;
  }

  return days * ONE_DAY_PRICE;
}

module.exports = calculateRentalCost;
