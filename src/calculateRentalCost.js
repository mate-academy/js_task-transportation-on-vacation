/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT_PRICE = 40;

  const MID_TERM_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;

  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = days * DAILY_RENT_PRICE;

  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
