/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cost = 0;

  if (days < 3) {
    cost = days * 40;

    return cost;
  }

  if (days < 7) {
    cost = days * 40 - 20;

    return cost;
  }

  cost = days * 40 - 50;

  return cost;
}

module.exports = calculateRentalCost;
