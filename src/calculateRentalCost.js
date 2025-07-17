/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let sum = days * 40;

  if (days >= 7) {
    sum = sum - 50;
  } else if (days >= 3) {
    sum = sum - 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
