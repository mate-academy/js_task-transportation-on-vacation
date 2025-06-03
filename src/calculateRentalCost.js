/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE_NORMAL = 40;
const SHORT_TERM = 2;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days <= SHORT_TERM) {
    return days * PRICE_NORMAL;
  }

  if (days > SHORT_TERM && days < LONG_TERM) {
    return days * PRICE_NORMAL - SHORT_TERM_DISCOUNT;
  }

  return days * PRICE_NORMAL - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
