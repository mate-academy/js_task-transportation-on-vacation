/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalConst = days * dailyRate;

  if (days >= 7) {
    totalConst -= 50;
  } else if (days >= 3) {
    totalConst -= 20;
  }

  return totalConst;
}

module.exports = calculateRentalCost;
