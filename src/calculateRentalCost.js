/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const BASIC_TERM = 3;
  const DISCOUNT_BASIC = 20;
  const DISCOUNT_LONG_TERM = 50;
  let totalPrice = days * RENT_PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return totalPrice  - DISCOUNT_LONG_TERM;
  }

  if (days >= BASIC_TERM) {
    return totalPrice  - DISCOUNT_BASIC;
  }

  return totalPrice ;
}

module.exports = calculateRentalCost;
