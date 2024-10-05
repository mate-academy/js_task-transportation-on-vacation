/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const DAILY_RENT_PRICE = 40;

  if (days >= LONG_TERM) {
    return DAILY_RENT_PRICE * days - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM && days < LONG_TERM) {
    return DAILY_RENT_PRICE * days - SHORT_TERM_DISCOUNT;
  }

  return DAILY_RENT_PRICE * days;
}

module.exports = calculateRentalCost;
