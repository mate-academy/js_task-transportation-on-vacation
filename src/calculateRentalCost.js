const DAILY_RATE = 40;
const MID_TERM_DAYS = 3;
const MID_TERM_DISCOUNT = 20;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(numberOfDays) {
  const basePrice = numberOfDays * DAILY_RATE;

  if (numberOfDays >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MID_TERM_DAYS) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
