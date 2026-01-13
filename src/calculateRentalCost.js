/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let costs = days * 40;

  if (days >= 7) {
    costs -= 50;
  } else if (days >= 3) {
    costs -= 20;
  }

  return costs;
}

module.exports = calculateRentalCost;
