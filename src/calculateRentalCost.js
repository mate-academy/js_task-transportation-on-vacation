/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;

const LONG_TERM = 7;

const LONG_TERM_DISCOUNT = 50;

const MEDIUM_TERM = 3;

const MEDIUM_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return days * PRICE_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return days * PRICE_PER_DAY - MEDIUM_TERM_DISCOUNT;
  }

  return days * PRICE_PER_DAY;
}
module.exports = calculateRentalCost;
