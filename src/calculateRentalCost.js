/**
 * @param {number} days
 *
 * @return {number}
 */

const DAY_RENT = 40;
const LONG_TERM = 7;
const SHORT_TERM = 3;
const LONG_TERM_DISCOUNT = -50;
const SHORT_TERM_DISCOUNT = -20;

function calculateRentalCost(days) {
  const totalRent = DAY_RENT * days;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return totalRent + SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return totalRent + LONG_TERM_DISCOUNT;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
