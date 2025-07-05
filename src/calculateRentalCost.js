/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = days * 40;

  if (days > 6) {
    return rentCost - 50;
  }

  if (days > 2) {
    return rentCost - 20;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
