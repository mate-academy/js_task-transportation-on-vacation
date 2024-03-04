/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;

  const WEEK = 7;
  const WEEK_DISCOUNT = 50;

  const SHORT_PERIOD = 3;
  const SHORT_PERIOD_DISKOUNT = 20;

  const ordinaryPrice = days * PRICE_PER_DAY;

  if (days >= WEEK) {
    return ordinaryPrice - WEEK_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return ordinaryPrice - SHORT_PERIOD_DISKOUNT;
  }

  return ordinaryPrice;
}

module.exports = calculateRentalCost;
