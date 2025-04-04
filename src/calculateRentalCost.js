/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const basePrice = days * pricePerDay;
  const longTermRentalDaysThreshold = 7;
  const longTermRentalDiscountRate = 50;
  const mediumTermRentalDaysThreshold = 3;
  const mediumTermRentalDiscountRate = 20;

  if (days >= longTermRentalDaysThreshold) {
    return basePrice - longTermRentalDiscountRate;
  }

  if (days >= mediumTermRentalDaysThreshold) {
    return basePrice - mediumTermRentalDiscountRate;
  }

  return basePrice;
}
module.exports = calculateRentalCost;
