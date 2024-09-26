/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  const basePrice = days * dailyPrice;

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return basePrice - shortTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
