/**
 * @param {number} days
 *
 * @return {number}
 */
const BASE_PRICE = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT_AMOUNT = 50;
const SHORT_TERM_DAYS = 3;
const SHORT_TERM_DISCOUNT_AMOUNT = 20;

function calculateRentalCost(days) {
  const total = days * BASE_PRICE;

  if (days >= LONG_TERM_DAYS) {
    return total - LONG_TERM_DISCOUNT_AMOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return total - SHORT_TERM_DISCOUNT_AMOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
