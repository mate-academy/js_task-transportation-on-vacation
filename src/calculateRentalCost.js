/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const shortRent = 3;
  const shortRentDiscount = 20;
  const longRent = 7;
  const longRentDiscount = 50;
  const basePrice = rentCost * days;

  if (days >= shortRent && days < longRent) {
    return basePrice - shortRentDiscount;
  }

  if (days >= longRent) {
    return basePrice - longRentDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
