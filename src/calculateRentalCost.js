/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT_PRICE = 40;

  const BASIC_DISCOUNT_DAYS = 3;
  const BASIC_DISCOUNT_AMOUNT = 20;

  const LONG_TERM_DISCOUNT_DAYS = 7;
  const LONG_TERM_DISCOUNT_AMOUNT = 50;

  const basePrice = days * DAILY_RENT_PRICE;

  if (days >= LONG_TERM_DISCOUNT_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT_AMOUNT;
  }

  if (days >= BASIC_DISCOUNT_DAYS) {
    return basePrice - BASIC_DISCOUNT_AMOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
