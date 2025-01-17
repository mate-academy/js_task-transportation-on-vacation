/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;
const LONG_TERM = 7;
const LONG_TERM_DOSCOUNT = 50;
const SHIRT_TERM = 3;
const SHIRT_TERM_DOSCOUNT = 20;

function calculateRentalCost(days) {
  let price = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    price -= LONG_TERM_DOSCOUNT;
  } else if (days >= SHIRT_TERM) {
    price -= SHIRT_TERM_DOSCOUNT;
  }

  return price;
  // write code here
}

module.exports = calculateRentalCost;
