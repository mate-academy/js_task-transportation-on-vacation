/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_CAR_PRICE = 40;
  const PRICE_FOR_DAYS = RENT_CAR_PRICE * days;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return PRICE_FOR_DAYS - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PRICE_FOR_DAYS - SHORT_TERM_DISCOUNT;
  }

  return PRICE_FOR_DAYS;
}

module.exports = calculateRentalCost;
