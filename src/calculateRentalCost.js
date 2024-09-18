/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const MIDDLE_TERM = 3;

  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;

  const LONG_TERM_DISCOUNT = 50;
  let totalAmount = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    totalAmount -= LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    totalAmount -= MIDDLE_TERM_DISCOUNT;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
