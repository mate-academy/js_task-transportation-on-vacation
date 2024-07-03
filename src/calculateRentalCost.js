/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM = 7;
const SHORT_TERM = 3;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;
const PRICE_RENT = 40;

function calculateRentalCost(days) {
  const countRent = days * PRICE_RENT;

  if (days < SHORT_TERM) {
    return countRent;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return countRent - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return countRent - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
