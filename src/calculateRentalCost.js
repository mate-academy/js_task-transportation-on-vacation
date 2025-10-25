/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SMALL_PERIOD = 3;
  const LONG_PERIOD = 7;
  const mediumTermRentDiscount = 20;
  const longTermRentDiscount = 50;
  const basePriceRent = 40;
  const basePrice = days * basePriceRent;

  if (days >= SMALL_PERIOD && days < LONG_PERIOD) {
    return basePrice - mediumTermRentDiscount;
  }

  if (days >= LONG_PERIOD) {
    return basePrice - longTermRentDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
