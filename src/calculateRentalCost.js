const DAY_PRICE = 40;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;

  if (days >= LONG_TERM) {
    discount = LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    discount = SHORT_TERM_DISCOUNT;
  }

  return days * DAY_PRICE - discount;
}

module.exports = calculateRentalCost;
