/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let sum = days * pricePerDay;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days >= shortTerm && days < longTerm) {
    sum -= shortTermDiscount;
  }

  if (days >= longTerm) {
    sum -= longTermDiscount;
  }

  return sum;
}

module.exports = calculateRentalCost;
