/**
 * @param {number} numberOfDays
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const DAY_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = numberOfDays * DAY_PRICE;

  if (numberOfDays >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
