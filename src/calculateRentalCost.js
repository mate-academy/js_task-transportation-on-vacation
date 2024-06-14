/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;
  const PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    discount = LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    discount = SHORT_TERM_DISCOUNT;
  }

  return days * PRICE - discount;
}

module.exports = calculateRentalCost;
