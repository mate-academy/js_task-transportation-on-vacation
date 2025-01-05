/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_PRICE = 40;
  const DISCOUNT_FOR_THREE_DAYS = 20;
  const DISCOUNT_FOR_SEVEN_DAYS = 50;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  const basePrice = days * DAILY_RENTAL_PRICE;

  if (days < SHORT_TERM) {
    return basePrice;
  }

  if (days < LONG_TERM) {
    return basePrice - DISCOUNT_FOR_THREE_DAYS;
  }

  return basePrice - DISCOUNT_FOR_SEVEN_DAYS;
}

module.exports = calculateRentalCost;
