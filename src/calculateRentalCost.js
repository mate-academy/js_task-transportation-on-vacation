/**
 * @param {number} days
 *
 * @return {number}
 */

const PAY_PER_DAY = 40;
const DAYS_FOR_MAX_DISCOUNT = 7;
const DAYS_FOR_MIN_DISCOUNT = 3;
const LONG_TERM_DISCOUNT = 50;
const MIN_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const TOTAL_AMOUNT = PAY_PER_DAY * days;

  if (days >= DAYS_FOR_MAX_DISCOUNT) {
    return TOTAL_AMOUNT - LONG_TERM_DISCOUNT;
  }

  if (days >= DAYS_FOR_MIN_DISCOUNT) {
    return TOTAL_AMOUNT - MIN_TERM_DISCOUNT;
  }

  return TOTAL_AMOUNT;
}

module.exports = calculateRentalCost;
