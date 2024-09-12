/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const SHORT_DISCONT = 20;
  const SHORT_TERM = 3;
  const LONG_DISCONT = 50;
  const LONG_TERM = 7;

  const rentalCost = days * DAILY_COST;

  if (days >= LONG_TERM) {
    return rentalCost - LONG_DISCONT;
  }

  if (days >= SHORT_TERM) {
    return rentalCost - SHORT_DISCONT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
