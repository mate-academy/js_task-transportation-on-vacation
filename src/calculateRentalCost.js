/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = days * 40;

  if (days >= 7) {
    return rentCost - 50;
  }

  if (days >= 3) {
    return rentCost - 20;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
