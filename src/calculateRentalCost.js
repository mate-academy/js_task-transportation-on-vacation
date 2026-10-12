/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DAYS = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  let totalCost = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_DAYS) {
    totalCost -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM_DAYS) {
    totalCost -= SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
