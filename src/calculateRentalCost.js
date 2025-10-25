/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const mediumTermRentDiscount = 20;
  const longTermRentDiscount = 50;
  const basePriceRent = 40;
  const basePrice = days * basePriceRent;

  if (days >= 3 && days <= 6) {
    return basePrice - mediumTermRentDiscount;
  } else if (days >= 7) {
    return basePrice - longTermRentDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
