/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = days * 40;

  if (days > 6) {
    return rentalCost - 50;
  }

  if (days > 2) {
    return rentalCost - 20;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
