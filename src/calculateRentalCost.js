/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCosts = 40;
  const shortDiscount = 20;
  const bigDiscount = 50;
  const shortTerm = 3;
  const longTerm = 7;

  const amount = days * dailyCosts;

  if (days < shortTerm) {
    return amount;
  }

  if (days < longTerm) {
    return amount - shortDiscount;
  }

  return amount - bigDiscount;
}
module.exports = calculateRentalCost;
