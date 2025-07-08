/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayPrice = 40;
  const middleTerm = 3;
  const middleTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;
  const basePrice = oneDayPrice * days;

  if (days < middleTerm) {
    return basePrice;
  }

  if (days < longTerm) {
    return basePrice - middleTermDiscount;
  }

  return basePrice - longTermDiscount;
}

module.exports = calculateRentalCost;
