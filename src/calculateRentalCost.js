/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_LONG_TERM = 50;
  const DISCOUNT_MEDIUM_TERM = 20;

  let totalCost = days * DAILY_RATE;

  if (days >= 7) {
    totalCost -= DISCOUNT_LONG_TERM;
  } else if (days >= 3) {
    totalCost -= DISCOUNT_MEDIUM_TERM;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
