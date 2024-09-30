/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCost = 40 * days;

  if (days >= 7) {
    rentalCost = rentalCost - 50;
  } else if (days >= 3) {
    rentalCost = rentalCost - 20;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
