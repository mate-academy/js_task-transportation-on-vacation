/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let offCost = 0;

  if (days >= 3 && days < 7) {
    offCost = 20;
  } else if (days >= 7) {
    offCost = 50;
  }

  const rentalCost = days * 40;

  return rentalCost - offCost;
}

module.exports = calculateRentalCost;
