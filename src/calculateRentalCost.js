/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const RENT_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const DISCOUNT_LONG_TERM = 50;
  const DISCOUNT_SHORT_TERM = 20;

  const price = days * RENT_PER_DAY;

  if (days >= LONG_TERM) {
    return price - DISCOUNT_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return price - DISCOUNT_SHORT_TERM;
  }

  return price;
}

module.exports = calculateRentalCost;
