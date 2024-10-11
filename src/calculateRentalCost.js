const SHORT_TERM = 3;
const LONG_TERM = 7;
const BASIC_DISCOUNT = 20;
const ADDITIONAL_LONG_TERM_DISCOUNT = 50;
const BASE_DAILY_COST = 40;

function calculateRentalCost(numberOfDays) {
  const basePrice = numberOfDays * BASE_DAILY_COST;

  if (numberOfDays >= LONG_TERM) {
    return basePrice - ADDITIONAL_LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM) {
    return basePrice - BASIC_DISCOUNT;
  }

  return basePrice;
}

module.exports = { calculateRentalCost };

module.exports = calculateRentalCost;
