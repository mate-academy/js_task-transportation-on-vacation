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
  const basic = days * 40;

  let sum = 0;

  if (days >= LONG_TERM) {
    sum = basic - LONG_TERM_DISCOUNT;

    return sum;
  }

  if (days >= SHORT_TERM) {
    sum = basic - SHORT_TERM_DISCOUNT;

    return sum;
  }

  return basic;
}

module.exports = calculateRentalCost;
