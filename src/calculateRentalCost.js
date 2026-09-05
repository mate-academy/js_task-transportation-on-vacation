/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let cost = days * dailyRate;

  if (days >= 7) {
    cost -= 50;
  } else if (days >= 3) {
    cost -= 20;
  }

  return cost;
}

module.exports = calculateRentalCost;
