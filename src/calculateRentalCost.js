/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRent = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  const totalRentPrice = days * dailyRent;

  if (days === 0) {
    return 0;
  }

  if (days < 3) {
    return totalRentPrice;
  }

  if (days >= 3 && days < 7) {
    return totalRentPrice - shortTermDiscount;
  }

  if (days >= 7) {
    return totalRentPrice - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
