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
  let discount = 0;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    discount = SHORT_TERM_DISCOUNT;
  } else if (days >= LONG_TERM) {
    discount = LONG_TERM_DISCOUNT;
  } else {
    discount = 0;
  }

  const totalCost = days * 40 - discount;

  return totalCost;
}

module.exports = calculateRentalCost;
