/**
 * @param {number} days
 *
 * @return {number}
 */

const RENT = 40;

const BASIC_TERM = 3;
const BASIC_TERM_DISCOUNT = 20;

const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return RENT * days - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_TERM) {
    return RENT * days - BASIC_TERM_DISCOUNT;
  }

  return days * RENT;
}

module.exports = calculateRentalCost;
