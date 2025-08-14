/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCost = days * 40;

  if (days >= 3 && days <= 6) {
    rentalCost = rentalCost - 20;
  } else if (days >= 7) {
    rentalCost = rentalCost - 50;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
