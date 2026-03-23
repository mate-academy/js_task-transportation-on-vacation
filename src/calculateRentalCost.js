/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const weekOrMoreDiscount = 50;
  const moreThanThreeDays = 20;
  const longTerm = 7;
  const midTerm = 3;
  const PriceForDays = basePrice * days;

  if (days >= longTerm) {
    return PriceForDays - weekOrMoreDiscount;
  }

  if (days >= midTerm) {
    return PriceForDays - moreThanThreeDays;
  }

  return PriceForDays;
}

module.exports = calculateRentalCost;
