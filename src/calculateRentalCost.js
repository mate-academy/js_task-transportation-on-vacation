/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(Days) {
  const DAILY_RENTAL_RATE = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_RENTAL_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;

  const basePrice = Days * DAILY_RENTAL_RATE;

  if (Days >= LONG_TERM_RENTAL_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (Days >= MID_TERM_RENTAL_DAYS) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
