/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40 * days;

  if (days >= 7) {
    return cost - 50;
  } else if (days >= 3) {
    return cost - 20;
  } else {
    return cost;
  }
}

module.exports = calculateRentalCost;
