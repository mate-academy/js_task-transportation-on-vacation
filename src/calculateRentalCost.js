/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const baseDayPrice = 40;
  const defaultCalculation = baseDayPrice * days;

  if (days >= 7) {
    return defaultCalculation - BIG_DISCOUNT;
  } else if (days >= 3 && days < 7) {
    return defaultCalculation - DISCOUNT;
  }

  return defaultCalculation;
}

module.exports = calculateRentalCost;
