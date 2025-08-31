/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let cost = 0;

  for (let i = 1; i <= days; i++) {
    if (i >= 7) {
      cost += 10;
    } else if (i >= 3) {
      cost += 20;
    } else if (i < 3) {
      cost += 40;
    }
  }

  return cost;
}

module.exports = calculateRentalCost;
