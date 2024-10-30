/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE_FOR_DAY = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const currentPrice = PRICE_FOR_DAY * days;

  if (days >= LONG_TERM) {
    return currentPrice - LONG_TERM_DISCOUNT;
  } else {
    if (days >= SHORT_TERM) {
      return currentPrice - SHORT_TERM_DISCOUNT;
    }

    return currentPrice;
  }
}

module.exports = calculateRentalCost;
