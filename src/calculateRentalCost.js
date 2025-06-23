/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let result = days * pricePerDay;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days >= shortTerm && days < longTerm) {
    result -= shortTermDiscount;
  }

  if (days >= longTerm) {
    result -= longTermDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
