/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return days * dailyRate - longTermDiscount;
  }

  if (days >= shortTerm) {
    return days * dailyRate - shortTermDiscount;
  }

  return days * dailyRate;
}

module.exports = calculateRentalCost;
