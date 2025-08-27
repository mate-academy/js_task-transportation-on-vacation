/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;
const MID_TERM_THRESHOLD = 3;
const LONG_TERM_THRESHOLD = 7;
const MID_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  let totalCost = 0;
  const baseCost = days * DAILY_RATE;

  if (days >= LONG_TERM_THRESHOLD) {
    totalCost = baseCost - LONG_TERM_DISCOUNT;

    return totalCost;
  }

  if (days >= MID_TERM_THRESHOLD) {
    totalCost = baseCost - MID_TERM_DISCOUNT;

    return totalCost;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
