/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  const totalCost = dailyPrice * days;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return days * dailyPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return days * dailyPrice - shortTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
