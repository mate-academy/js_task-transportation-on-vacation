/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let rentalCost = pricePerDay * days;

  if (days >= 7) {
    rentalCost -= 50;
  } else if (days >= 3) {
    rentalCost -= 20;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
