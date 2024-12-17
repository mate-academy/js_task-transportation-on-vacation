/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCosts = days * 40;

  if (totalCosts >= 280) {
    return totalCosts - 50;
  }

  if (totalCosts >= 120) {
    return totalCosts - 20;
  }

  return totalCosts;
}

module.exports = calculateRentalCost;
