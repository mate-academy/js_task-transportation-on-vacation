/**
 * @param {number} days
 *
 * @return {number}
 */

const RENTAL_PAY = 40;
const LONG_TERM_DISCOUNT = 50;
const LONG_TERM = 7;
const SHORT_TERM_DISCOUNT = 20;
const SHORT_TERM = 3;

function calculateRentalCost(days) {
  const PAYMENT = RENTAL_PAY * days;

  if (days >= LONG_TERM) {
    return PAYMENT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PAYMENT - SHORT_TERM_DISCOUNT;
  }

  return PAYMENT;
}
module.exports = calculateRentalCost;
