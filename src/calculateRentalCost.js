/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  let sum = 40 * days;

  if (days >= 7) {
    sum -= 50;

    return sum;
  }

  if (days >= 3) {
    sum -= 20;

    return sum;
  }

  return sum;
}

module.exports = calculateRentalCost;
