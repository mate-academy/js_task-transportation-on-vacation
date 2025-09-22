/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const price = basePrice * days;
  const smallTermDiscount = 20;
  const smallTerm = 3;
  const longTermDiscount = 50;
  const longTerm = 7;

  if (days >= longTerm) {
    return price - longTermDiscount;
  }

  if (days >= smallTerm) {
    return price - smallTermDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
