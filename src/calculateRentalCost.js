/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_DISCOUNT = 50;
  const SHORT_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const numberOfDays = days;
  const basePrice = DAILY_RATE * numberOfDays;

  if (days >= LONG_TERM) {
    return basePrice - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
