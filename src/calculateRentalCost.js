/**
 * @param {number} days
 *
 * @return {number}
 */

const DAYLY_RENT = 40;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const standartPrice = days * DAYLY_RENT;

  if (days >= LONG_TERM) {
    return standartPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return standartPrice - SHORT_TERM_DISCOUNT;
  }

  return standartPrice;
}

module.exports = calculateRentalCost;
