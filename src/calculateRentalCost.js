/**
 * @param {number} days
 *
 * @return {number}
 */

const dailyRate = 40;
const discountFor3To6Days = 20;
const discountFor7OrMoreDays = 50;
const basicDiscountStartDay = 3;
const additionalDiscountStartDay = 7;

function calculateRentalCost(days) {
  if (days < basicDiscountStartDay) {
    return days * dailyRate;
  }

  if (days >= basicDiscountStartDay && days < additionalDiscountStartDay) {
    return days * dailyRate - discountFor3To6Days;
  }

  if (days >= additionalDiscountStartDay) {
    return days * dailyRate - discountFor7OrMoreDays;
  }
}

module.exports = calculateRentalCost;
