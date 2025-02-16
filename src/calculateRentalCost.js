const PRICE_PER_DAY = 40;
const LONG_PERIOD_DAYS = 7;
const LONG_PERIOD_DISCOUNT = 50;
const MEDIUM_PERIOD_DAYS = 3;
const MEDIUM_PERIOD_DISCOUNT = 20;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseTotal = days * PRICE_PER_DAY;

  if (days >= LONG_PERIOD_DAYS) {
    return baseTotal - LONG_PERIOD_DISCOUNT;
  }

  if (days >= MEDIUM_PERIOD_DAYS) {
    return baseTotal - MEDIUM_PERIOD_DISCOUNT;
  }

  return baseTotal;
}

module.exports = calculateRentalCost;
