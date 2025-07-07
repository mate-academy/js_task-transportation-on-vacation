/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAY_COST = 40;
  const SHORT_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  let discount = 0;

  if (days >= LONG_TERM_DAYS) {
    discount = LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM_DAYS) {
    discount = SHORT_TERM_DISCOUNT;
  }

  return days * DAY_COST - discount;
}

module.exports = calculateRentalCost;
