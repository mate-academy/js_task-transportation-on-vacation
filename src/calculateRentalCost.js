/**
 * @param {number} days
 *
 * @return {number}
 */
const minDaysForDiscount = 3;
const maxDaysForDiscount = 7;
const smallDiscountAmount = 20;
const largeDiscountAmount = 50;
const dailyRentalRate = 40;

function calculateRentalCost(days) {
  if (days < minDaysForDiscount) {
    return days * dailyRentalRate;
  } else if (days >= minDaysForDiscount && days < maxDaysForDiscount) {
    return days * dailyRentalRate - smallDiscountAmount;
  } else if (days >= maxDaysForDiscount) {
    return days * dailyRentalRate - largeDiscountAmount;
  }
}

module.exports = calculateRentalCost;
