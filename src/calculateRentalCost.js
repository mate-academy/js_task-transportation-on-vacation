/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basePrice = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= longTerm) {
    return days * basePrice - bigDiscount;
  }

  if (days >= shortTerm) {
    return days * basePrice - smallDiscount;
  }

  return days * basePrice;
}

module.exports = calculateRentalCost;
