/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const totalCost = days * pricePerDay;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  let totalDiscount = 0;
  const longTerm = 7;
  const shortTerm = 3;

  if (days >= shortTerm && days < longTerm) {
    totalDiscount += shortTermDiscount;
  }

  if (days >= longTerm) {
    totalDiscount += longTermDiscount;
  }

  return totalCost - totalDiscount;
}

module.exports = calculateRentalCost;
