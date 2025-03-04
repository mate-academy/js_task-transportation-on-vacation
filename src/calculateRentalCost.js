/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const bigDiscount = 50;
  const smallDiscount = 20;
  const dailyPrice = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const basePrice = days * dailyPrice;

  if (days >= longTerm) {
    return basePrice - bigDiscount;
  }

  if (days >= shortTerm) {
    return basePrice - smallDiscount;
  }

  return basePrice;
}
module.exports = calculateRentalCost;
