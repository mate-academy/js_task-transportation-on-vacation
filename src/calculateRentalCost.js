/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERMS = 7;
  const SHORT_TERMS = 3;
  const LONG_TERMS_DISCOUNT = 50;
  const SHORT_TERMS_DISCOUNT = 20;
  const basicRent = days * PRICE_PER_DAY;

  if (days >= LONG_TERMS) {
    return basicRent - LONG_TERMS_DISCOUNT;
  }

  if (days >= SHORT_TERMS) {
    return basicRent - SHORT_TERMS_DISCOUNT;
  }

  return basicRent;
}

module.exports = calculateRentalCost;
