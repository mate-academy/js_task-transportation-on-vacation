/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const DAY_PRICE = 40;

  if (typeof numberOfDays !== 'number' || numberOfDays < 1) {
    throw new Error('Invalid days value!');
  }

  if (numberOfDays >= LONG_TERM) {
    return numberOfDays * DAY_PRICE - LONG_TERM_DISCOUNT;
  }

  return numberOfDays >= SHORT_TERM
    ? numberOfDays * DAY_PRICE - SHORT_TERM_DISCOUNT
    : numberOfDays * DAY_PRICE;
}

module.exports = calculateRentalCost;
