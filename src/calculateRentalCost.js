/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const sum = 40 * days;

  if (sum < 120) {
    return sum;
  } else if (sum >= 280) {
    return sum - 50;
  } else if (sum >= 120) {
    return sum - 20;
  }
}

module.exports = calculateRentalCost;
