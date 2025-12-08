/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let total = dailyRate * days;

  if (days >= 7) {
    total -= 50;
  } else if (days >= 3) {
    total -= 20;
  }

  return total;
}

module.exports = calculateRentalCost;
