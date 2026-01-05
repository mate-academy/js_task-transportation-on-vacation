/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_DAILY_PRICE = 40;
  const WEEKLY_DISCOUNT_THRESHOLD = 7;
  const MID_TERM_DISCOUNT_THRESHOLD = 3;
  const WEEKLY_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  const basePrice = RENTAL_DAILY_PRICE * days;

  if (days >= WEEKLY_DISCOUNT_THRESHOLD) {
    return basePrice - WEEKLY_DISCOUNT;
  }

  if (days >= MID_TERM_DISCOUNT_THRESHOLD) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
