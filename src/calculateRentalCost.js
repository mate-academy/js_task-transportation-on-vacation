/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const smallTerm = 3;
  const smallTermDiscount = 20;
  const bigTerm = 7;
  const bigTermDiscount = 50;
  const numberOfDays = days;
  const basePrice = days * 40;

  if (numberOfDays < smallTerm) {
    return basePrice;
  }

  if (numberOfDays < bigTerm) {
    return basePrice - smallTermDiscount;
  }

  return basePrice - bigTermDiscount;
}

module.exports = calculateRentalCost;
