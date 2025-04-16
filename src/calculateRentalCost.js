const DAILY_RATE = 40;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;
const MIN_DAYS_FOR_DISCOUNT = 3;
const MIN_DAYS_FOR_EXTRA_DISCOUNT = 7;

function calculateRentalCost(days) {
  const basePrice = days * DAILY_RATE;

  if (days >= MIN_DAYS_FOR_EXTRA_DISCOUNT) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MIN_DAYS_FOR_DISCOUNT) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
