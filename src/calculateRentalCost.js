/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;
const LONG_TERM = 7;
const LONG_TERM_DOSCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DOSCOUNT = 20;

function calculateRentalCost(days) {
  let price = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    price -= LONG_TERM_DOSCOUNT;
  } else if (days >= SHORT_TERM) {
    price -= SHORT_TERM_DOSCOUNT;
  }

  return price;
  // write code here
}

module.exports = calculateRentalCost;
