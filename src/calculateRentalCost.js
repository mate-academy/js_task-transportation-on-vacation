/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const RENT_COAST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MIDIUM_TERM = 3;
  const MIDIUM_TERM_DISCOUNT = 20;

  if (days < MIDIUM_TERM) {
    return days * RENT_COAST;
  }

  if (days >= MIDIUM_TERM && days < LONG_TERM) {
    return days * RENT_COAST - MIDIUM_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * RENT_COAST - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
