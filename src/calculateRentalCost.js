/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRISE = 40;
  const COST_DAYS = days * PRISE;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return COST_DAYS - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return COST_DAYS - SHORT_TERM_DISCOUNT;
  }

  return COST_DAYS;
}

module.exports = calculateRentalCost;
