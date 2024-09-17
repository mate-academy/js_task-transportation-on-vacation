/**
 * @param {number} days
 *
 * @return {number}
 */

const RENT_COST = 40;
const LONG_TERM_RENTAL = 7;
const LONG_TERM_RENTAL_DISCOUNT = 50;
const SHORT_TERM_RENTAL = 3;
const SHORT_TERM_RENTAL_DISCOUNT = 20;

function calculateRentalCost(days) {
  // write code here
  if (days >= LONG_TERM_RENTAL) {
    return days * RENT_COST - LONG_TERM_RENTAL_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL) {
    return days * RENT_COST - SHORT_TERM_RENTAL_DISCOUNT;
  }

  return days * RENT_COST;
}

module.exports = calculateRentalCost;
