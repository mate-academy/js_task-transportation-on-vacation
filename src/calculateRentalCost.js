/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;
  const allDaysPrice = days * pricePerDay;

  if (days >= longTerm) {
    return allDaysPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return allDaysPrice - shortTermDiscount;
  }

  return allDaysPrice;
}

module.exports = calculateRentalCost;
