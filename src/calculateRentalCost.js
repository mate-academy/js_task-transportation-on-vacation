/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const RENT = 40;

  let sum = 0;

  for (let i = 1; i <= days; i++) {
    sum += RENT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    sum -= SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    sum -= LONG_TERM_DISCOUNT;
  }

  return sum;
}

module.exports = calculateRentalCost;
