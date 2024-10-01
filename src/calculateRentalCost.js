/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;

  const longTerm = 7;
  const longTermDiscount = 50;
  
  const shortTerm = 3;
  const shortTermDiscount = 20;

  let baisPrice = days * dayRent;

  if (days >= longTerm) {
    return baisPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return baisPrice- shortTermDiscount;
  }

  return baisPrice;
}

module.exports = calculateRentalCost;
