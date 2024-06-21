/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRentPrice = 40;
  let rentalCost = 0;

  if (days >= 7) {
    rentalCost = days * carRentPrice - 50;

    return rentalCost;
  }

  if (days >= 3) {
    rentalCost = days * carRentPrice - 20;

    return rentalCost;
  } else {
    rentalCost = days * carRentPrice;

    return rentalCost;
  }
}

module.exports = calculateRentalCost;
