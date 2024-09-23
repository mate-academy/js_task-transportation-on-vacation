/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  let sum = days * 40;

  if (sum < 120) {
    return sum;
  }

  if (sum >= 280) {
    sum -= 50;

    return sum;
  }

  if (sum >= 120) {
    sum -= 20;

    return sum;
  }
}

module.exports = calculateRentalCost;
