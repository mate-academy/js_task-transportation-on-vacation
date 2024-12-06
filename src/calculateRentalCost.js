/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let result = days * 40;

  if (days > 2) {
    result -= 20;
  }

  if (days > 6) {
    result -= 30;
  }

  return result;
}

module.exports = calculateRentalCost;
