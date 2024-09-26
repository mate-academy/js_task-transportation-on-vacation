/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ON_DAY_PRICE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  let discount = 0;

  if (days >= SHORT_TERM) {
    discount = SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    discount = LONG_TERM_DISCOUNT;
  }

  const totalAmount = ON_DAY_PRICE * days - discount;

  return totalAmount;
}

module.exports = calculateRentalCost;
