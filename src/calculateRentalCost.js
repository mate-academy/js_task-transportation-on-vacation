/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const midTerm = 3;
  const longTerm = 7;
  const longTermDiscount = 50;
  const midTermDiscount = 20;
  const totalCost = pricePerDay * days;

  if (days >= longTerm) {
    return totalCost - longTermDiscount;
  }

  if (days >= midTerm) {
    return totalCost - midTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
