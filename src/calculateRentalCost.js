/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  let totalCost = 0;

  for (let i = 0; i < days; i++) {
    totalCost += DAILY_RATE;
  }

  if (days >= 7) {
    return totalCost - LONG_TERM_DISCOUNT;
  } else if (days >= 3) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
