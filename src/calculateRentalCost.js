const BASE_DAILY_PRICE = 40;
const LONG_TERM_THRESHOLD = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_THRESHOLD = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  let result = days * BASE_DAILY_PRICE;

  if (days >= LONG_TERM_THRESHOLD) {
    return (result = result - LONG_TERM_DISCOUNT);
  }

  if (days >= MID_TERM_THRESHOLD) {
    return (result = result - MID_TERM_DISCOUNT);
  }

  return result;
}

module.exports = calculateRentalCost;
