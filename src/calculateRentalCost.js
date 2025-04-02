/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = days * 40;

  if (days >= 7) {
    return baseCost - 50;
  }

  if (days >= 3) {
    return baseCost - 20;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
