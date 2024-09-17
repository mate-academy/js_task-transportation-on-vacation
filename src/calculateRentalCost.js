/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  
  const dailyPrice = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const shortTerm = 3;

  const price = days * dailyPrice;
  
  if (days >= longTerm) {
    return price - longTermDiscount;
  }

  if (days >= shortTerm) {
    return price - shortTermDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
