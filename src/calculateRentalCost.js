/**
 * @param {number} days
 *
 * @return {number}
 */
const RENTAL_COST = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  let totalCost = days * RENTAL_COST;

  if (days >= LONG_TERM) {
    totalCost -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    totalCost -= SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
