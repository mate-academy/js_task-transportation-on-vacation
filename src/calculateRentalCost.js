/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRentCost = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const totalRentAmount = days * dayRentCost;

  if (days >= longTerm) {
    return totalRentAmount - longTermDiscount;
  }

  if (days >= shortTerm) {
    return totalRentAmount - shortTermDiscount;
  }

  return totalRentAmount;
}

module.exports = calculateRentalCost;
