/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_PER = 7;
  const LONG_PER_DISCOUNT = 50;
  const SHORT_PER = 3;
  const SHORT_PER_DISCOUNT = 20;
  const bazePrice = PRICE_PER_DAY * days;

  if (days >= LONG_PER) {
    return bazePrice - LONG_PER_DISCOUNT;
  }

  if (days >= SHORT_PER) {
    return bazePrice - SHORT_PER_DISCOUNT;
  }

  return bazePrice;
}

module.exports = calculateRentalCost;
