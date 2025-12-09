/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCosts = 40;
  const longCarRent = 7;
  const longCarRentDiscount = 50;
  const shortCarRent = 3;
  const shortCarRentDiscount = 20;

  if (days >= longCarRent) {
    return carCosts * days - longCarRentDiscount;
  }

  if (days >= shortCarRent) {
    return carCosts * days - shortCarRentDiscount;
  }

  return days * carCosts;
}

module.exports = calculateRentalCost;
