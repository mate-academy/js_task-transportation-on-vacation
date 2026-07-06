/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const mediumDay = 3;
  const longerDays = 7;
  const termDiscount = 20;
  const longTermDiscount = 50;

  let basePrice = days * dailyRate;

  if (days >= longerDays) {
    return basePrice - longTermDiscount;
  }

  if (days >= mediumDay) {
    return basePrice - termDiscount;
  }

  return basePrice;
}
module.exports = calculateRentalCost;
