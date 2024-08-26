/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT_PRISE = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const TOTAL_PRICE = DAILY_RENT_PRISE * days;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return TOTAL_PRICE - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return TOTAL_PRICE - LONG_TERM_DISCOUNT;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
