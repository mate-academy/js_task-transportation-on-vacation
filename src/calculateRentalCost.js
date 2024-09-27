/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const totalPrice = days * price;
  const LONG_TERMS = 7;
  const LONG_TERMS_DISCONT = 50;
  const SHORT_TERMS = 3;
  const SHORT_TERMS_DISCONT = 20;

  if (days >= LONG_TERMS) {
    return totalPrice - LONG_TERMS_DISCONT;
  }

  if (days >= SHORT_TERMS) {
    return totalPrice - SHORT_TERMS_DISCONT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
