/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let cost = 0;

  if (days >= 7) {
    cost = days * 40 - 50;
  } else if (days >= 3) {
    cost = days * 40 - 20;
  } else {
    cost = days * 40;
  }

  return cost;
}

module.exports = calculateRentalCost;
