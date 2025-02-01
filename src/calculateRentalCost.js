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
  const TOTAL = days * BASE_RENTAL_COST;

  if (days >= SHORT_TERM_RENT_DAYS && days < LONG_TERM_RENT_DAYS) {
    return TOTAL - SHORT_TERM_DISCOUNT;
  } else if (days >= LONG_TERM_RENT_DAYS) {
    return TOTAL - LONG_TERM_DISCOUNT;
  }

  return TOTAL;
}

module.exports = calculateRentalCost;
