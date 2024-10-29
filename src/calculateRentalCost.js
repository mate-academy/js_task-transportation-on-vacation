/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAY_RENT = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  let discount = 0;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    discount = -20;
  }

  if (days >= LONG_TERM) {
    discount = -50;
  }

  const TOTAL_RENT = days * DAY_RENT + discount;

  return TOTAL_RENT;
}

module.exports = calculateRentalCost;
