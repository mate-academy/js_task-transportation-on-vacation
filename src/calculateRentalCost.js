/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM_RENTAL = 7;
const SHORT_TERM_RENTAL = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;
const PRICE_OF_ONE_DAY = 40;

function calculateRentalCost(days) {
  let START_PRICE = days * PRICE_OF_ONE_DAY;

  if (days >= LONG_TERM_RENTAL) {
    return START_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL) {
    return START_PRICE - SHORT_TERM_DISCOUNT;
  }

  return START_PRICE;
}

module.exports = calculateRentalCost;
