/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_PRICE = 40;

  const DISCOUNT_FOR_THREE_MORE_DAYS = 20;
  const DISCOUNT_FOR_SEVEN_MORE_DAYS = 50;

  const SHORT_TERM = 6;
  const LONG_TERM = 7;

  if (days > 2 && days <= SHORT_TERM) {
    return RENTAL_PRICE * days - DISCOUNT_FOR_THREE_MORE_DAYS;
  }

  if (days >= LONG_TERM) {
    return RENTAL_PRICE * days - DISCOUNT_FOR_SEVEN_MORE_DAYS;
  }

  return RENTAL_PRICE * days;
}

module.exports = calculateRentalCost;
