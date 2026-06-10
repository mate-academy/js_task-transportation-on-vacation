function calculateRentalCost(day) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  const MID_TERM = 3;
  const LONG_TERM = 7;


  if (day >= LONG_TERM) {
    return PRICE_PER_DAY * day - LONG_TERM_DISCOUNT;
  }
  if (day >= MID_TERM) {
    return PRICE_PER_DAY * day - MID_TERM_DISCOUNT;
  }

  return PRICE_PER_DAY* day;
}

module.exports = calculateRentalCost;
