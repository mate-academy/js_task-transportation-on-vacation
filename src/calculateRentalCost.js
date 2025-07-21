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
    return dailyRate * days - longTermDiscount;
  }

  if (days >= shortTerm) {
    return dailyRate * days - shortTermDiscount;
  }

  return dailyRate * days;
}

module.exports = calculateRentalCost;
