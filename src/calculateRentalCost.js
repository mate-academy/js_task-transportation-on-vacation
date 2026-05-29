/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const totalCost = days * DAILY_RATE;

  if (days >= 7) {
    return totalCost - 50;
  } else if (days >= 3) {
    return totalCost - 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
