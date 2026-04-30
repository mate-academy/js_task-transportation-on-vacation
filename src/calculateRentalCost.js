/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  let totalCost = DAILY_RATE * days;

  if (days >= 3 && days <= 6) {
    totalCost -= 20;
  }

  if (days >= 7) {
    totalCost -= 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
