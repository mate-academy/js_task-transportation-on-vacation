/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  const totalCost = dailyRate * days;

  if (days >= 7) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return totalCost - MID_TERM_DISCOUNT;
  }


  return totalCost;
}

module.exports = calculateRentalCost;
