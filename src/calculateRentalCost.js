/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const RENT_OFF_FOR_LONG_TERM = 50;
  const RENT_OFF_FOR_SHORT_TERM = 20;
  const RENT_COST_FOR_DAY = 40;
  const RENT_COST = days * RENT_COST_FOR_DAY;

  if (days >= LONG_TERM) {
    return RENT_COST - RENT_OFF_FOR_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return RENT_COST - RENT_OFF_FOR_SHORT_TERM;
  }

  return RENT_COST;
}

module.exports = calculateRentalCost;
