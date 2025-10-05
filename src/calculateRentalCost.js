/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyPrice = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const middleTerm = 3;
  const middleTermDiscount = 20;

  const totalPrice = days * dailyPrice;

  if (days >= longTerm) {
    return totalPrice - longTermDiscount;
  }

  if (days >= middleTerm) {
    return totalPrice - middleTermDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
