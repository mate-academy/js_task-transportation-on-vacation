/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCosts = days * 40;

  if (days >= 7) {
    return totalCosts - 50;
  }

  if (days >= 3) {
    return totalCosts - 20;
  }

  return totalCosts;
}

module.exports = calculateRentalCost;
