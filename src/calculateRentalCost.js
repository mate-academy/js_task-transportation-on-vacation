/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const MIDL_TERM = 3;
  const MIDL_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const basePrice = days * 40;

  if (days <= 0) {
    return 0;
  }

  if (days > 0 && days < MIDL_TERM) {
    return basePrice;
  }

  if (days >= MIDL_TERM && days < LONG_TERM) {
    return basePrice - MIDL_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
