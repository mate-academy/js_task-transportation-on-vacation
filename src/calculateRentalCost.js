/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST_PER_DAY = 40;
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  const baseTotalCost = RENT_COST_PER_DAY * days;

  if (days >= LONG_TERM) {
    return baseTotalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return baseTotalCost - MID_TERM_DISCOUNT;
  }

  return baseTotalCost;
}

module.exports = calculateRentalCost;
