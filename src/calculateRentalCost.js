/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const longTerm = 7;
  const shortTerm = 3;
  const priceRent = 40;
  const basicDiscount = 20;
  const premiumDiscount = 50;

  if (days < shortTerm) {
    return days * priceRent;
  }

  if (days < longTerm) {
    return days * priceRent - basicDiscount;
  }

  return days * priceRent - premiumDiscount;
}

module.exports = calculateRentalCost;
