/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;
const SHORT_DAYS = 3;
const LONG_DAYS = 7;
const SMALL_DISCOUNT = 20;
const BIG_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days < SHORT_DAYS) {
    return days * PRICE_PER_DAY;
  }

  if (days < LONG_DAYS) {
    return days * PRICE_PER_DAY - SMALL_DISCOUNT;
  }

  return days * PRICE_PER_DAY - BIG_DISCOUNT;
}

module.exports = calculateRentalCost;
