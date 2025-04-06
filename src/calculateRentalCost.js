// eslint-disable-next-line no-unused-vars
function calculateRentalCost(days) {
  const dailyRate = 40;
  const LOND_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERN_DISCOUNT = 20;

  const basePrice = days * dailyRate;

  if (days >= LOND_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERN_DISCOUNT;
  }

  return basePrice;
}
module.exports = calculateRentalCost;
