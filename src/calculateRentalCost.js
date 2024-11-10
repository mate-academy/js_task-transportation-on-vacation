/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCost = days * 40;

  if (days > 6) {
    return carCost - 50;
  }

  if (days > 2) {
    return carCost - 20;
  }

  return carCost;
}

module.exports = calculateRentalCost;
