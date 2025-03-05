/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  if (days >= LONG_TERM) {
    sum = PRICE_PER_DAY * days - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    sum = PRICE_PER_DAY * days - SHORT_TERM_DISCOUNT;
  } else {
    sum = PRICE_PER_DAY * days;
  }

  return sum;
}

module.exports = calculateRentalCost;
