const DAILY_PRICE = 40;
const BASIC_DISCOUNT_DAYS = 3;
const BASIC_DISCOUNT = 20;
const LONG_TERM_DISCOUNT_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const basePrice = days * DAILY_PRICE;

  if (days >= LONG_TERM_DISCOUNT_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_DISCOUNT_DAYS) {
    return basePrice - BASIC_DISCOUNT;
  }

  return basePrice;
}
module.exports = calculateRentalCost;
