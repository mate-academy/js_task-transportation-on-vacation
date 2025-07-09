/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let mainPrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return mainPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return mainPrice - SHORT_TERM_DISCOUNT;
  }

  return mainPrice;

  // My old solution:
  // if (days >= 7) {
  //   return 40 * days - 50;
  // }

  // if (days >= 3 && days < 7) {
  //   return 40 * days - 20;
  // }

  // return 40 * days;
}

module.exports = calculateRentalCost;
