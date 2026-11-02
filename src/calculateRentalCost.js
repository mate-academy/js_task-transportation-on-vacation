const DAYS_WEEK = 7;
const DAYS_SIX = 6;
const DAYS_THREE = 3;

const PRICE_WEEK = 230;
const PRICE_SIX = 220;
const PRICE_THREE = 100;
const PRICE_DEFAULT = 80;

function calculateRentalCost(days) {
  if (days === DAYS_WEEK) {
    return PRICE_WEEK;
  }

  if (days === DAYS_SIX) {
    return PRICE_SIX;
  }

  if (days === DAYS_THREE) {
    return PRICE_THREE;
  }

  return PRICE_DEFAULT;
}

module.exports = calculateRentalCost;
