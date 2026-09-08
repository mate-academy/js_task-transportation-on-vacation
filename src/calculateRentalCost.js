/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 40 * days;

  if (days >= 7) {
    sum -= 50;
  } else if (days >= 3) {
    sum -= 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
