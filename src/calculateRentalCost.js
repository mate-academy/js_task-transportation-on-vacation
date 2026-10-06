/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  // write code here

  const cost = days * DAILY_RATE;
  let discount = 0;

  if (days >= LONG_TERM) {
    discount = LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    discount = SHORT_TERM_DISCOUNT;
  }

  return cost - discount;
}

module.exports = calculateRentalCost;
