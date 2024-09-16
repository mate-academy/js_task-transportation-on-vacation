/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceCarRent = 40;

  const longTerm = 7;
  const longTermDiscount = 50;

  const shortTerm = 3;
  const shortTermDiscount = 20;

  const initialPrice = days * priceCarRent;

  if (days >= longTerm) {
    return initialPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return initialPrice - shortTermDiscount;
  }

  return initialPrice;
}

module.exports = calculateRentalCost;
