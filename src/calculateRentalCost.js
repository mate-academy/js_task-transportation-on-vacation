/**
 * @param {number} days
 *
 * @return {number}
 */

const RENTAL_COST_PER_DAY = 40;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;
const LONG_TERM_DISCOUNT_DAYS = 7;
const SHORT_TERM_DISCOUNT_DAYS = 3;

function calculateRentalCost(days) {
  const totalCost = days * RENTAL_COST_PER_DAY;
  if (days >= LONG_TERM_DISCOUNT_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM_DISCOUNT_DAYS) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }
  return totalCost;
}

module.exports = calculateRentalCost;
