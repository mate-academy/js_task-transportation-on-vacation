/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  let result = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    result -= LONG_TERM_DISCOUNT;
  } else if (days >= MEDIUM_TERM) {
    result -= MEDIUM_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
