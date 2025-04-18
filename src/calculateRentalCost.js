/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let result = 0;

  if (days >= 1) {
    result = 40 * days;
  }

  if (days >= 7) {
    result -= 50;
  }

  else if (days >= 3) {
    result -= 20;
  }

  return result;
}

module.exports = calculateRentalCost;
