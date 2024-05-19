/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST_PER_DAY = 40;
  const LONG_TERM_RENT_MIN_DAYS = 7;
  const LONG_TERM_RENT_DICSOUNT = 50;
  const SHORT_TERM_RENT_MIN_DAYS = 3;
  const SHORT_TERM_RENT_DICSOUNT = 20;

  if (days >= LONG_TERM_RENT_MIN_DAYS) {
    return days * RENT_COST_PER_DAY - LONG_TERM_RENT_DICSOUNT;
  }

  if (days >= SHORT_TERM_RENT_MIN_DAYS) {
    return days * RENT_COST_PER_DAY - SHORT_TERM_RENT_DICSOUNT;
  }

  return days * RENT_COST_PER_DAY;
}

module.exports = calculateRentalCost;
