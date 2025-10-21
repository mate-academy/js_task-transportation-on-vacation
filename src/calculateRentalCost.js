/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOneDay = 40;
  const LONG_TERMS = 7;
  const LONG_TERMS_DISCOUNT = 50;
  const SHORT_TERMS = 3;
  const SHORT_TERMS_DISCOUNT = 20;
  let totalPrice = days * priceOneDay;

  if (days >= LONG_TERMS) {
    return totalPrice - LONG_TERMS_DISCOUNT;
  }

  if (days >= SHORT_TERMS) {
    return totalPrice - SHORT_TERMS_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
