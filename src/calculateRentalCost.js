/**
 * @param {number} days
 *
 * @return {number}
 */
const BASE_RENTAL_COST = 40;
const SHORT_TERM_RENT_DAYS = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_RENT_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  let total = days * BASE_RENTAL_COST;

  if (days >= SHORT_TERM_RENT_DAYS && days < LONG_TERM_RENT_DAYS) {
    total -= SHORT_TERM_DISCOUNT;
  } else if (days >= LONG_TERM_RENT_DAYS) {
    total -= LONG_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
