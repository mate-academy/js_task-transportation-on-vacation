/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_THRESHOLD = 3;
  const MID_TERM_DISCOUNT = 20;

  const totalCost = days * DAILY_RENTAL_COST;

  if (days >= LONG_TERM_THRESHOLD) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_THRESHOLD) {
    return totalCost - MID_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
