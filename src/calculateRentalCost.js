/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISKOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISKOUNT = 20;
  const CAR_COSTS = 40;

  if (days >= LONG_TERM) {
    return days * CAR_COSTS - LONG_TERM_DISKOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * CAR_COSTS - SHORT_TERM_DISKOUNT;
  }

  return days * CAR_COSTS;
}

module.exports = calculateRentalCost;
