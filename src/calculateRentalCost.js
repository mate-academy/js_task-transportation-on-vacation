/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const longTerm = 7;
  const midTerm = 3;
  const longTermDiscount = 50;
  const midTermDiscount = 20;

  const totalRent = rentCost * days;

  if (days >= longTerm) {
    return totalRent - longTermDiscount;
  }

  if (days >= midTerm) {
    return totalRent - midTermDiscount;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
