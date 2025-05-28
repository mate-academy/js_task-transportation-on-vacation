/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const basePrice = 40;

  let total = days * basePrice;

  if (days >= LONG_TERM) {
    total -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    total -= SHORT_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
