/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const prisePerDay = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const basePrise = days * prisePerDay;

  if (days >= longTerm) {
    return basePrise - longTermDiscount;
  }

  if (days >= shortTerm) {
    return basePrise - shortTermDiscount;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
