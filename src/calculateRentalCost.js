/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let cost = 40 * days;

  if (days >= 3) {
    if (days >= 7) {
      cost -= 50;
    } else {
      cost -= 20;
    }
  }

  return cost;
}

module.exports = calculateRentalCost;
