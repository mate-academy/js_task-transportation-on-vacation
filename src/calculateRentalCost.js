/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const totalPrice = pricePerDay * days;

  if (days >= longTerm) {
    return totalPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return totalPrice - shortTermDiscount;
  }

  return totalPrice;
}
module.exports = calculateRentalCost;
