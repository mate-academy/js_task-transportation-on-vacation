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
  let total = days * DAILY_RATE;

  if (days >= DISCOUNT_THRESHOLD_BIG) {
    total -= DISCOUNT_BIG;
  } else if (days >= DISCOUNT_THRESHOLD_SMALL) {
    total -= DISCOUNT_SMALL;
  }

  return total;
}

module.exports = calculateRentalCost;
