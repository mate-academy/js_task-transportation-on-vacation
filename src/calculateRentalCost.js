/**
 * @param {number} days
 *
 * @return {number}
 */
const CAR_RENT = 40;
const SHORT_TERM = 3;
const LONG_TERM = 7;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const total = days * CAR_RENT;

  if (days >= LONG_TERM) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return total - SHORT_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
