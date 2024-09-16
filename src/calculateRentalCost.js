/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  let discount = 0;

  if (days >= SHORT_TERM) {
    discount = SHORT_TERM_DISCOUNT;
  };

  if (days >= LONG_TERM) {
    discount = LONG_TERM_DISCOUNT;
  };

  return days * BASE_PRICE - discount;
}

module.exports = calculateRentalCost;
