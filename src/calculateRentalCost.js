/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalValue = 40 * days;

  if (days >= 7) {
    return rentalValue - 50;
  }

  if (days >= 3) {
    return rentalValue - 20;
  }

  return rentalValue;
}

module.exports = calculateRentalCost;
