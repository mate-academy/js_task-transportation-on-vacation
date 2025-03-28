/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const MID_TERM = 3;
  const LONG_TERM = 7;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const CALCULATED_COST = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return CALCULATED_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return CALCULATED_COST - MID_TERM_DISCOUNT;
  }

  return CALCULATED_COST;
}

module.exports = calculateRentalCost;
