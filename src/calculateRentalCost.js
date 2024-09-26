/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const LONG_TERM_DSCNT = 50;
  const MID_TERM_DSCNT = 20;
  const basePrice = COST_PER_DAY * days;

  if (days >= LONG_TERM) {
    return (basePrice - LONG_TERM_DSCNT);
  }

  if (days >= MID_TERM) {
    return (basePrice - MID_TERM_DSCNT);
  }

  return basePrice;
}

module.exports = calculateRentalCost;
