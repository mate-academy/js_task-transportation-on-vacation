/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  const CAR_COST_PER_DAY = 40;

  if (days >= LONG_TERM) {
    return days * CAR_COST_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return days * CAR_COST_PER_DAY - MID_TERM_DISCOUNT;
  }

  return days * CAR_COST_PER_DAY;
}

module.exports = calculateRentalCost;
