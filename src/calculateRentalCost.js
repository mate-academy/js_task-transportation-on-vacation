/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = days * 40;

  if (days <= 2) {
    return cost;
  } else if (days <= 6) {
    return cost - 20;
  } else {
    return cost - 50;
  }
}
module.exports = calculateRentalCost;
