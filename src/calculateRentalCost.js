const DAILY_RATE = 40;
const DISCOUNT_3_DAYS = 20;
const DISCOUNT_7_DAYS = 50;

function calculateRentalCost(days) {
  const base = days * DAILY_RATE;

  if (days >= 7) {
    return base - DISCOUNT_7_DAYS;
  }

  if (days >= 3) {
    return base - DISCOUNT_3_DAYS;
  }

  return base;
}

module.exports = calculateRentalCost;

