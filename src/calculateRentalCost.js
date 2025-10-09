function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;

  if (!Number.isInteger(days) || days <= 0) {
    return 0;
  }

  if (days < MID_TERM_DAYS) {
    return DAILY_RATE * days;
  }

  if (days < LONG_TERM_DAYS) {
    return DAILY_RATE * days - MID_TERM_DISCOUNT;
  }

  return DAILY_RATE * days - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
