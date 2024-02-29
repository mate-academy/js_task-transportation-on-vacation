/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const BASIC_COST = days * COST_PER_DAY;
  const LONG_TERM_VACATION = 7;
  const LONG_TERM_VACATION_DISCOUNT = 50;
  const SHORT_TERM_VACATION = 3;
  const SHORT_TERM_VACATION_DISCOUNT = 20;

  if (days >= LONG_TERM_VACATION) {
    return BASIC_COST - LONG_TERM_VACATION_DISCOUNT;
  }

  if (days >= SHORT_TERM_VACATION) {
    return BASIC_COST - SHORT_TERM_VACATION_DISCOUNT;
  }

  return BASIC_COST;
}

module.exports = calculateRentalCost;
