/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const LONG_TERM_RENTAL_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_RENTAL_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  let total = days * DAILY_RATE;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    total -= LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM_RENTAL_DAYS) {
    total -= MID_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
