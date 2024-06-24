/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const pricePerDay = 40;
  const shortTerm = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const longTerm = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = days * pricePerDay;

  if (days >= longTerm) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= shortTerm) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
