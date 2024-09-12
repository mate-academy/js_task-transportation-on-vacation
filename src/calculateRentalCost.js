/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCost = 40;

  if (days >= 7) {
    return (days * rentalCost) - 50;
  }

  else if (days >= 3) {
    return (days * rentalCost) - 20;
  }

  else {
    return days * rentalCost;
  }
}

module.exports = calculateRentalCost;
