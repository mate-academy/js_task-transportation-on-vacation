/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE_PER_DAY = 40;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days < 3) {
    return days * PRICE_PER_DAY;
  }

  if (days >= 3 && days <= 6) {
    return days * PRICE_PER_DAY - SHORT_TERM_DISCOUNT;
  }

  if (days >= 7) {
    return days * PRICE_PER_DAY - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
