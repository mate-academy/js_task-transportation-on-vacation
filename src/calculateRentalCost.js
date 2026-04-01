/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PER_PRICE_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * PER_PRICE_DAY - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return days * PER_PRICE_DAY - SHORT_TERM_DISCOUNT;
  }

  return days * PER_PRICE_DAY;
}

module.exports = calculateRentalCost;
