/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const basePrice = 40;
  let totalPrice = 0;

  if (days < SHORT_TERM) {
    return (totalPrice = basePrice * days);
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return (totalPrice = days * basePrice - SHORT_TERM_DISCOUNT);
  }

  if (days >= LONG_TERM) {
    return (totalPrice = days * basePrice - LONG_TERM_DISCOUNT);
  }
}

module.exports = calculateRentalCost;
