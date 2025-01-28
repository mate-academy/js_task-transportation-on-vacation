/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCost = 0;

  if (days >= 7) {
    rentalCost = days * 40 - 50;

    return rentalCost;
  }

  if (days >= 3) {
    rentalCost = days * 40 - 20;

    return rentalCost;
  }

  rentalCost = days * 40;

  return rentalCost;
}

module.exports = calculateRentalCost;
