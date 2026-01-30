/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const COST_DAY = 40;
  const TOTAL_COST = days * COST_DAY;
  const LONG_TERM_RENTAL_DAYS = 7;
  const SHORT_TERM_RENTAL_DAYS = 3;
  const LONG_TERM_DISCOUNT_AMOUNT = 50;
  const SHORT_TERM_DISCOUNT_AMOUNT = 20;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return TOTAL_COST - LONG_TERM_DISCOUNT_AMOUNT;
  }

  if (days >= SHORT_TERM_RENTAL_DAYS) {
    return TOTAL_COST - SHORT_TERM_DISCOUNT_AMOUNT;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
