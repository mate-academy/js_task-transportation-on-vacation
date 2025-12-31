/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM = 7;
const SHORT_TERM = 3;
const PRICE = 40;

function calculateRentalCost(days) {
  let discount = 0;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    discount = 20;
  } else if (days >= LONG_TERM) {
    discount = 50;
  }

  return days * PRICE - discount;
}

module.exports = calculateRentalCost;
