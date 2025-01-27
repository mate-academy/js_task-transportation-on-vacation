/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const totalCost = days * costPerDay;

  if (days >= 3 && days < 7) {
    return totalCost - 20;
  }

  if (days >= 7) {
    return totalCost - 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
