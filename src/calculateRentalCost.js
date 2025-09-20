/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  let result = days * dailyRate;

  if (days >= 7) {
    result -= 50;
  } else if (days >= 3) {
    result -= 20;
  }

  return result;
}

module.exports = calculateRentalCost;
