/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sale = 0;
  const PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    sale = LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    sale = SHORT_TERM_DISCOUNT;
  }

  return days * PRICE - sale;
}

module.exports = calculateRentalCost;
