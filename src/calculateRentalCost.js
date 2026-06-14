const DAILY_RATE = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= LONG_TERM_DAYS) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return days * DAILY_RATE - MID_TERM_DISCOUNT;
  }

  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;
