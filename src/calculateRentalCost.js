/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE_RENT = 40;
  const DISCOUNT_FOR_MIN_SEVEN_DAYS = 50;
  const DISCOUNT_FOR_MIN_THREE_DAYS = 20;

  if (days >= 7) {
    return PRICE_RENT * days - DISCOUNT_FOR_MIN_SEVEN_DAYS;
  }

  if (days >= 3) {
    return PRICE_RENT * days - DISCOUNT_FOR_MIN_THREE_DAYS;
  }

  return PRICE_RENT * days;
}

module.exports = calculateRentalCost;
