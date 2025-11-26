/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM_RENTAL_DAYS = 6;
  const LONG_TERM_DISCOUNT = 50;
  const COUNT_COST = COST_PER_DAY * days;
  const SHORT_TERM_RENTAL_DAYS = 2;
  const SHORT_TERM_DICSOUNT = 20;

  if (days > LONG_TERM_RENTAL_DAYS) {
    return COUNT_COST - LONG_TERM_DISCOUNT;
  }

  if (days > SHORT_TERM_RENTAL_DAYS) {
    return COUNT_COST - SHORT_TERM_DICSOUNT;
  }

  return COUNT_COST;
}

module.exports = calculateRentalCost;
