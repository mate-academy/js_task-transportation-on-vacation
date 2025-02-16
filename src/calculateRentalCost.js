/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RENT_PRISE = 40;
const SHORT_TERM = 3;
const LONG_TERM = 7;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const totalPrice = DAILY_RENT_PRISE * days;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return totalPrice - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
