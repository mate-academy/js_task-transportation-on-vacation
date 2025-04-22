const DAILY_RATE = 40;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(numberOfDays) {
  const basePrice = numberOfDays * DAILY_RATE;

  if (numberOfDays >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
