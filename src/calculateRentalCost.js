/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const basePrice = price * days;
  const longTerm = 7;
  const longTermDiscount = 50;
  const midTerm = 3;
  const midTermDiscount = 20;

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  } else if (days >= midTerm) {
    return basePrice - midTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
