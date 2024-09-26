/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = days * 40;

  if (days >= 7) {
    return cost - 50;
  } else if (days >= 3) {
    return cost - 20;
  }

  return cost;
}

module.exports = calculateRentalCost;
