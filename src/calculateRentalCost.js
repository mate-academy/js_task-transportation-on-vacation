/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const defaultPrice = 40;
  const firstDiscountTerm = 3;
  const firstDiscount = 20;
  const secondDiscountTerm = 7;
  const secondDiscount = 50;

  if (days >= secondDiscountTerm) {
    return defaultPrice * days - secondDiscount;
  }

  if (days >= firstDiscountTerm) {
    return defaultPrice * days - firstDiscount;
  }

  return defaultPrice * days;
}

module.exports = calculateRentalCost;
