/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = 40;
  const midTerm = 3;
  const midTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days < midTerm) {
    return days * baseCost;
  }

  if (days >= midTerm && days < longTerm) {
    return days * baseCost - midTermDiscount;
  }

  return days * baseCost - longTermDiscount;
}

module.exports = calculateRentalCost;
