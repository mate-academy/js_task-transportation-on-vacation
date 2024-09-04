/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let amount = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    amount -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    amount -= SHORT_TERM_DISCOUNT;
  }

  return amount;
}

module.exports = calculateRentalCost;
