/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RENTAL_PRICE = 40;
const LONG_TERM_RENTAL_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_RENTAL_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const totalRentalPrice = days * DAILY_RENTAL_PRICE;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return totalRentalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_RENTAL_DAYS) {
    return totalRentalPrice - MID_TERM_DISCOUNT;
  }

  return totalRentalPrice;
}

module.exports = calculateRentalCost;
