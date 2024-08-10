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
  const totalCost = days * rentalCost;

  if (days >= longTerm) {
    return totalCost - longTermDiscount;
  }

  if (days >= normalTerm) {
    return totalCost - normalTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
