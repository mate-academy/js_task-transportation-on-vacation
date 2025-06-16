/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const dailyPrice = 40;
  const totalPrice = days * dailyPrice;

  if (days >= longTerm) {
    return totalPrice - longTermDiscount;
  } else if (days >= shortTerm) {
    return totalPrice - shortTermDiscount;
  } else {
    return totalPrice;
  }
}

module.exports = calculateRentalCost;
