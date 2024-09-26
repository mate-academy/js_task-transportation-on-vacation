/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCost = 0;

  if (days < 3) {
    rentalCost = days * 40;
  } else if (days < 7) {
    rentalCost = days * 40 - 20;
  } else {
    rentalCost = days * 40 - 50;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
