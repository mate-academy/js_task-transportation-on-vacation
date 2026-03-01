/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  let baseCost = 0;

  if (days < MID_TERM) {
    baseCost = COST_PER_DAY * days;
  }

  if (days >= MID_TERM && days < LONG_TERM) {
    baseCost = COST_PER_DAY * days - MID_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    baseCost = COST_PER_DAY * days - LONG_TERM_DISCOUNT;
  }

  return baseCost;
}
module.exports = calculateRentalCost;
