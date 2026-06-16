/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return days * dayPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return days * dayPrice - shortTermDiscount;
  }

  return days * dayPrice;
}

module.exports = calculateRentalCost;
