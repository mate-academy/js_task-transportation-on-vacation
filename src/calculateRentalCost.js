/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTermDiscount = 50;
  const normalTermDiscount = 20;
  const rentalCost = 40;
  const longTerm = 7;
  const normalTerm = 3;
  let totalCost = days * rentalCost;

  if (days >= longTerm) {
    totalCost -= longTermDiscount;
  }

  if (days >= normalTerm && days < longTerm) {
    totalCost -= normalTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
