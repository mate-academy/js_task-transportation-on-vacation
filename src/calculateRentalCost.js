/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = days * 40;

  if (days < 3) {
    return rentalCost;
  } else if (days < 7) {
    return rentalCost - 20;
  } else {
    return rentalCost - 50;
  }
}

module.exports = calculateRentalCost;
