/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const rentCost = 40;
  const totalRentPrice = days * rentCost;
  const longTermRent = 7;
  const shortTermRent = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days < shortTermRent) {
    return totalRentPrice;
  }

  if (days >= shortTermRent && days <= 6) {
    return totalRentPrice - shortTermDiscount;
  }

  if (days >= longTermRent) {
    return totalRentPrice - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
