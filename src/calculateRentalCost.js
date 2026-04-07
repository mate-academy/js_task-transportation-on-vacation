/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const MID_TERM_RENTAL_DAYS = 20;
  const LONG_TERM_RENTAL_DAYS = 50;
  const totalCost = dailyCost * days;

  if (days >= 7) {
    return totalCost - LONG_TERM_RENTAL_DAYS;
  }

  if (days >= 3) {
    return totalCost - MID_TERM_RENTAL_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
