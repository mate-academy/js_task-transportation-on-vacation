/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_FOR_DAY = 40;
const SHORT_TERM = 3;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  let res = 0;

  for (let i = 0; i < days; i++) {
    res += PRICE_FOR_DAY;
  }

  if (days >= LONG_TERM) {
    res -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    res -= SHORT_TERM_DISCOUNT;
  }

  return res;
}

module.exports = calculateRentalCost;
