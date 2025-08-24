/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = days * 40;
  let finalRentalCost = 0;

  if (days >= 7) {
    finalRentalCost = rentalCost - 50;
  } else if (days >= 3) {
    finalRentalCost = rentalCost - 20;
  } else {
    finalRentalCost = rentalCost;
  }

  return finalRentalCost;
}

module.exports = calculateRentalCost;
