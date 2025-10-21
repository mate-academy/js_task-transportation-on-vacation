function calculateRentalCost(numberOfDays) {
  const BASE_DAILY_RATE = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_THRESHOLD = 3;
  const MID_TERM_DISCOUNT = 20;
  const basePrice = numberOfDays * BASE_DAILY_RATE;

  if (numberOfDays >= LONG_TERM_THRESHOLD) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MID_TERM_THRESHOLD) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
