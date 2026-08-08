/**
 * @param {number} days
 *
 * @return {number}
 */
const BASE_PRICE_PER_DAY = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  let price = days * BASE_PRICE_PER_DAY;

  if (days >= LONG_TERM_DAYS) {
    price -= LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM_DAYS) {
    price -= MID_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
