/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const totalRentPrice = days * rentCost;
  const longTermRent = 7;
  const longTermDiscount = 50;
  const smallTermRent = 3;
  const smallTermDiscount = 20;

  if (days < smallTermRent) {
    return totalRentPrice;
  }

  if (days >= smallTermRent && days <= 6) {
    return totalRentPrice - smallTermDiscount;
  }

  if (days >= longTermRent) {
    return totalRentPrice - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
