/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let cost = 40 * days;

  if (days >= 3 && days < 7) {
    cost -= 20;
  } else if (days >= 7) {
    cost -= 50;
  }

  return cost;
}

module.exports = calculateRentalCost;
