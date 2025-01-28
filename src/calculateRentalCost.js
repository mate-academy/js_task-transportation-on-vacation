/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRentalCost = 40;
  const rentalCost = days * dayRentalCost;

  if (days >= 7) {
    return rentalCost - 50;
  }

  if (days >= 3) {
    return rentalCost - 20;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
