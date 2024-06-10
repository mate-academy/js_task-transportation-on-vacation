/**
 * @param {number} days
 *
 * @return {number}
 */

const basePrice = 40;
const threeDays = 3;
const threeDaysDiscount = 20;
const sevenDays = 7;
const sevenDaysDiscount = 50;

function calculateRentalCost(days) {
  if (days < threeDays) {
    return basePrice * days;
  }

  if (days < sevenDays) {
    return basePrice * days - threeDaysDiscount;
  }

  return basePrice * days - sevenDaysDiscount;
}

module.exports = calculateRentalCost;
