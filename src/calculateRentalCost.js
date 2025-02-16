const PRICE = 40;

const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;

const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * PRICE - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * PRICE - LONG_TERM_DISCOUNT;
  }

  return days * PRICE;
}

module.exports = calculateRentalCost;
