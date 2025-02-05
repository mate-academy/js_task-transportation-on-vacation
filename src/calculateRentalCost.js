/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;

  if (days >= 7) {
    return days * rentalCost - 50;
  }

  if (days >= 3) {
    return days * rentalCost - 20;
  }

  return days * rentalCost;
}

module.exports = calculateRentalCost;
