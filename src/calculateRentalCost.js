/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT_PERIOD = 7;
  const SMALL_DISCOUNT_PERIOD = 3;
  const PRICE_FOR_DAY = 40;
  const cost = days * PRICE_FOR_DAY;

  if (days >= BIG_DISCOUNT_PERIOD) {
    return cost - BIG_DISCOUNT;
  } else if (days >= SMALL_DISCOUNT_PERIOD) {
    return cost - SMALL_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
