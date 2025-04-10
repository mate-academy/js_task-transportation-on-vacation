/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basedPrice = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  let totalPrice = 0;

  if (days < SHORT_TERM) {
    totalPrice = basedPrice * days;

    return totalPrice;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    totalPrice = basedPrice * days - SHORT_TERM_DISCOUNT;

    return totalPrice;
  }

  if (days >= LONG_TERM) {
    totalPrice = basedPrice * days - LONG_TERM_DISCOUNT;

    return totalPrice;
  }

  return basedPrice;
}

module.exports = calculateRentalCost;
