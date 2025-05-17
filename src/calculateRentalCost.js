/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const DAILY_RENT_PRICE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return DAILY_RENT_PRICE * days;
  } else if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * DAILY_RENT_PRICE - SHORT_TERM_DISCOUNT;
  }

  return days * DAILY_RENT_PRICE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
