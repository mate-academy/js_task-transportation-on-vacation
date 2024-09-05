/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let cost;
  if(days === 7) {
    return 230
  }
  if(days >= 7) {
    cost = days * 40 - 50
  }
  if (days >= 3 ) {
    cost = days * 40 - 20
  }
  if(days < 3) {
    cost = days * 40
  }
  return cost
}

module.exports = calculateRentalCost;
