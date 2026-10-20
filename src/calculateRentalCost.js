/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const LONG_TERM_DAYS = 7;
  const SHORT_TERM_DAYS = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const price = days * DAILY_PRICE;
  let result = price;

  if (days >= LONG_TERM_DAYS) {
    result = price - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS && days < LONG_TERM_DAYS) {
    result = price - SHORT_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
