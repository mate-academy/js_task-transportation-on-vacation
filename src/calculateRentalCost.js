/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentPrice = 40;
  const rentalTotalPrice = dailyRentPrice * days;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const smallRentPeriod = 3;
  const bigRentPeriod = 7;

  if (days < smallRentPeriod) {
    return rentalTotalPrice;
  }

  if (days >= smallRentPeriod && days < bigRentPeriod) {
    return rentalTotalPrice - smallDiscount;
  }

  return rentalTotalPrice - bigDiscount;
}

module.exports = calculateRentalCost;
