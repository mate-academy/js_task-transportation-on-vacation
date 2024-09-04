/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalCost = days * dailyRate;
  const minDiscont = 20;
  const maxDiscont = 50;
  const minDays = 3;
  const maxDays = 7;

  if (days >= maxDays) {
    totalCost -= maxDiscont;
  } else if (days >= minDays) {
    totalCost -= minDiscont;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
