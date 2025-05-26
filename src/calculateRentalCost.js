/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = 40 * days;

  if (days >= 3 && days <= 6) {
    return baseCost - 20;
  } else if (days >= 7) {
    return baseCost - 50;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
