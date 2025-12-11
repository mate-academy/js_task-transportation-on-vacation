/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const finalCost = DAILY_RATE * days;

  if (days >= 7) {
    return finalCost - 50;
  } else if (days >= 3) {
    return finalCost - 20;
  }

  return finalCost;
}

module.exports = calculateRentalCost;
