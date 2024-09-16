/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentalCost = days * 40;

  if (days >= 7) {
    return rentalCost - 50;
  } else if (days >= 3) {
    return rentalCost - 20;
  } else {
    return rentalCost;
  }
}

module.exports = calculateRentalCost;
