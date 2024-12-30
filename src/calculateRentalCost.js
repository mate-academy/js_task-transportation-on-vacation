/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCostPerDay = 40;
  const totalRentalCost = rentalCostPerDay * days;

  if (days >= 7) {
    return totalRentalCost - 50;
  }

  if (days >= 3) {
    return totalRentalCost - 20;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
