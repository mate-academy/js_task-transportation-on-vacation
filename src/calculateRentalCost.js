/**
 * @param {number} days
 *
 * @return {number}
 */
const longDays = 7;
const longDaysDiscount = 50;
const mediumDays = 3;
const mediumDaysDiscount = 20;
const daysValue = 40;

function calculateRentalCost(days) {
  const basePrice = days * daysValue;

  if (days >= longDays) {
    return basePrice - longDaysDiscount;
  }

  if (days >= mediumDays) {
    return basePrice - mediumDaysDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
