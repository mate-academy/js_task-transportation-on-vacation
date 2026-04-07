/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const LONG_TERM_THRESHOLD_DAYS = 7;
  const MID_TERM_THRESHOLD_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const totalCost = dailyCost * days;

  if (days >= LONG_TERM_THRESHOLD_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_THRESHOLD_DAYS) {
    return totalCost - MID_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
