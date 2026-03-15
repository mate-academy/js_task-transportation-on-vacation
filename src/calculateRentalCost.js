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
  const DAY_PRICE = 40;

  let result = days * DAY_PRICE;

  if (days >= LONG_TERM) {
    result = result - LONG_TERM_DISCOUNT;

    return result;
  }

  if (days >= SHORT_TERM) {
    result = result - SHORT_TERM_DISCOUNT;

    return result;
  }

  return result;
}

module.exports = calculateRentalCost;
