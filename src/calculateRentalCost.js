/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const cost = pricePerDay * days;
  const midTerm = 3;
  const longTerm = 7;
  const longTermDiscount = 50;
  const midTermDiscount = 20;

  if (days >= longTerm) {
    return cost - longTermDiscount;
  }

  if (days >= midTerm) {
    return cost - midTermDiscount;
  }

  return cost;
}

module.exports = calculateRentalCost;
