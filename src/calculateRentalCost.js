/**
 * @param {number} days
 *
 * @return {number}
 */

const basePrice = 40;
const SMALL_TERM = 3;
const SMALL_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days === 0) {
    return 0;
  }

  if (days < SMALL_TERM) {
    return days * basePrice;
  }

  if (days >= SMALL_TERM && days < LONG_TERM) {
    return days * basePrice - SMALL_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * basePrice - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
