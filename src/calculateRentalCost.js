/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cost = days * 40;

  if (days >= 7) {
    cost -= 50;
  } else if (days >= 3) {
    cost -= 20;
  }

  return cost;
}

module.exports = calculateRentalCost;
