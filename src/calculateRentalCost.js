/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM= 7;
  const SHORT_TERM = 3;

  const PRICE = days *  DAILY_PRICE;

  if (days >= LONG_TERM) {
    return PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PRICE - SHORT_TERM_DISCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
