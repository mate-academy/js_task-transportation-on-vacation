const DAILY_RATE = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const total = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return total - MID_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
