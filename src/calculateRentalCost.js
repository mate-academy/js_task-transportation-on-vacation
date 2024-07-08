/**
 * @param {number} days
 *
 * @return {number}
 */
const minDaysForDiscount = 3;
const maxDaysForDiscount = 7;
const smallDiscountAmount = 20;
const largeDiscountAmount = 50;

function calculateRentalCost(days) {
  if (days < minDaysForDiscount) {
    return days * 40;
  } else if (days >= minDaysForDiscount && days < maxDaysForDiscount) {
    return days * 40 - smallDiscountAmount;
  } else if (days >= maxDaysForDiscount) {
    return days * 40 - largeDiscountAmount;
  }
}

module.exports = calculateRentalCost;
