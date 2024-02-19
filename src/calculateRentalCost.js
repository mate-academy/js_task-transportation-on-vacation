/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  let result = days * 40;

  if (days >= LONG_TERM) {
    result -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    result -= SHORT_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
