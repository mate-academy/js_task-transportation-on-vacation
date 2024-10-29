/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE_PER_DAY = 40;
const LONG_TERM = 7;
const SHORT_TERM = 3;
const BIG_DISCOUNT = 50;
const SMALL_DISCOUNT = 20;

function calculateRentalCost(days) {
  const PRICE = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return PRICE - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PRICE - SMALL_DISCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
