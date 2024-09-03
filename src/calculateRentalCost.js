/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCoast = 0;

  if (days < 3) {
    rentalCoast = days * 40;
  }

  if (days > 2 && days < 7) {
    rentalCoast = days * 40 - 20;
  }

  if (days >= 7) {
    rentalCoast = days * 40 - 50;
  }

  return rentalCoast;
}

module.exports = calculateRentalCost;
