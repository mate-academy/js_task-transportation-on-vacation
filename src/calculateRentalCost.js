/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAILY_PRICE = 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let total = days * DAILY_PRICE;

  if (days >= LONG_TERM) {
    total = total - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    total = total - SHORT_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
