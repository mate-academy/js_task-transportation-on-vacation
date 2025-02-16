/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRentOfDay = 40;
  const longTermRent = 7;
  const shortTermRent = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const sumRentCar = carRentOfDay * days;

  if (days >= longTermRent) {
    return sumRentCar - longTermDiscount;
  }

  if (days >= shortTermRent) {
    return sumRentCar - shortTermDiscount;
  }

  return sumRentCar;
}

module.exports = calculateRentalCost;
