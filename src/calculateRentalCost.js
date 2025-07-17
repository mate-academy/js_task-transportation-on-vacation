/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentalCost = 40;

  switch (true) {
    case days >= 7:
      return days * rentalCost - 50;
    case days >= 3 && days < 7:
      return days * rentalCost - 20;
    default:
      return days * rentalCost;
  }
}

module.exports = calculateRentalCost;
