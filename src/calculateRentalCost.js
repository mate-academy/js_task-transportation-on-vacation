/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const priceRent = 40;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return days * priceRent - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * priceRent - SHORT_TERM_DISCOUNT;
  }

  return days * priceRent;
}

module.exports = calculateRentalCost;
