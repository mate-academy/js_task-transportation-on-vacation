/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 2;
  const LONG_TERM = 7;
  const PRICE_RENTAL = 40;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const PRICE_FOR_CLIENT = days * PRICE_RENTAL;

  if (days >= LONG_TERM) {
    return PRICE_FOR_CLIENT - BIG_DISCOUNT;
  }

  if (days > SHORT_TERM) {
    return PRICE_FOR_CLIENT - SMALL_DISCOUNT;
  }

  return PRICE_FOR_CLIENT;
}

module.exports = calculateRentalCost;
