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
  if (days >= LONG_TERM) {
    return RENTAL_COST * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENTAL_COST * days - SHORT_TERM_DISCOUNT;
  }

  const allRentalCost = RENTAL_COST * days;

  return allRentalCost;
}

module.exports = calculateRentalCost;
