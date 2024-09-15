/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentalCost = days * 40;

  if (days < 3) {
    return rentalCost;
  }

  if (days < 7) {
    return rentalCost - 20;
  }

  return rentalCost - 50;
}

module.exports = calculateRentalCost;
