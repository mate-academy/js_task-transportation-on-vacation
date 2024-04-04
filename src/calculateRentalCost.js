/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PEE_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PEE_DAY;

  if (days >= LONG_TERM) {
    const finalPrice = basePrice - LONG_TERM_DISCOUNT;

    return finalPrice;
  }

  if (days >= SHORT_TERM) {
    const finalPrice = basePrice - SHORT_TERM_DISCOUNT;

    return finalPrice;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
