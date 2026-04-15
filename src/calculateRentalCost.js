/**
 * @param {number} days
 *
 * @return {number}
 */
const BasePrice = 40;
const LongRent = 7;
const ShortRent = 3;
const LongRentDiscount = 50;
const ShortRentDiscount = 20;

function calculateRentalCost(days) {
  const AllPrices = days * BasePrice;

  if (days >= LongRent) {
    return AllPrices - LongRentDiscount;
  }

  if (days >= ShortRent) {
    return AllPrices - ShortRentDiscount;
  }

  return AllPrices;
}

module.exports = calculateRentalCost;
