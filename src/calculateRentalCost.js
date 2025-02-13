const DAILY_RATE = 80;
const DISCOUNT_3_DAYS = 100;
const DISCOUNT_6_DAYS = 220;
const DISCOUNT_7_DAYS = 230;

function calculateRentalCost(days) {
  if (days === 7) {
    return DISCOUNT_7_DAYS;
  }

  if (days === 6) {
    return DISCOUNT_6_DAYS;
  }

  if (days === 3) {
    return DISCOUNT_3_DAYS;
  }

  return DAILY_RATE;
}

module.exports = calculateRentalCost;
