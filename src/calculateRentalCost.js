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

  switch (true) {
    case days >= 3 && days < 7:
      return defaultCalculation - DISCOUNT;
    case days >= 7:
      return defaultCalculation - BIG_DISCOUNT;
    default:
      return defaultCalculation;
  }
}

module.exports = calculateRentalCost;
