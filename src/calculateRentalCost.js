/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_COST = 40;
const LONG_TERM_RENTAL_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_RENTAL_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const basePrice = days * DAILY_COST;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_RENTAL_DAYS) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

  module.exports = calculateRentalCost;
