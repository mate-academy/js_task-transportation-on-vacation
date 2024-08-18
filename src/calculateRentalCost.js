/**
 * @param {number} days
 *
 * @return {number}
 */
const DAYLY_PRICE = 40;

const LONG_TERM = 7;
const SHORT_TERM = 3;

const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return days * DAYLY_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * DAYLY_PRICE - SHORT_TERM_DISCOUNT;
  }

  return days * DAYLY_PRICE;
}

module.exports = calculateRentalCost;
