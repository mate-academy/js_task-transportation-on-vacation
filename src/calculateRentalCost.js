/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let sum = days * 40;

  if (days >= 7) {
    sum -= 50;
  } else if (days >= 3) {
    sum -= 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
