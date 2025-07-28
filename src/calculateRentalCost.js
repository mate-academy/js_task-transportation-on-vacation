/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let rentalCost;
  const dayRental = 40;

  if (days >= 7) {
    rentalCost = dayRental * days - 50;

    return rentalCost;
  }

  if (days >= 3) {
    rentalCost = dayRental * days - 20;

    return rentalCost;
  }

  rentalCost = dayRental * days;

  return rentalCost;
}

module.exports = calculateRentalCost;
