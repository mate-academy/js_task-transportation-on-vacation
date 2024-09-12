/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = days * 40;

  if (days > 2) {
    sum = sum - 20;
  }

  if (days > 6) {
    sum = sum - 30;
  }

  return sum;
}

module.exports = calculateRentalCost;
