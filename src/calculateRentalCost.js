/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRentalCost = 40;
  const longTermRental = 7;
  const mediumTermRental = 3;
  const longTermRentalDiscount = 50;
  const mediumTermRentalDiscount = 20;

  const basePrice = days * dailyRentalCost;

  if (days >= longTermRental) {
    return basePrice - longTermRentalDiscount;
  }

  if (days >= mediumTermRental) {
    return basePrice - mediumTermRentalDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
