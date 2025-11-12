/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;
const DISCOUNT_THRESHOLD_SMALL = 3;
const DISCOUNT_THRESHOLD_BIG = 7;
const DISCOUNT_SMALL = 20;
const DISCOUNT_BIG = 50;

function calculateRentalCost(days) {
  const TOTAL = days * DAILY_RATE;

  if (days >= DISCOUNT_THRESHOLD_BIG) {
    return TOTAL - DISCOUNT_BIG;
  }

  if (days >= DISCOUNT_THRESHOLD_SMALL) {
    return TOTAL - DISCOUNT_SMALL;
  }

  return TOTAL;
}

module.exports = calculateRentalCost;
