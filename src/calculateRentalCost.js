/**
 * @param {number} days
 *
 * @return {number}

 */

function calculateRentalCost(numberOfDays) {
  // write code here
  const longTermThereshold = 7;
  const shortTermThereshold = 3;
  const dailyRate = 40;
  const longTermDiscount = 50;
  const midTermDiscount = 20;
  const basePrice = dailyRate * numberOfDays;

  if (numberOfDays >= longTermThereshold) {
    return basePrice - longTermDiscount;
  }

  if (numberOfDays >= shortTermThereshold) {
    return basePrice - midTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
