/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const totalCost = days * pricePerDay;

  if (days >= 7) {
    return totalCost - 50;
  }

  if (days >= 3) {
    return totalCost - 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
