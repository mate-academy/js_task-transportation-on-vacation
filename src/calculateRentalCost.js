/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const MEDIUM_TERM = 3;
  const LONG_TERM = 7;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  let totalAmount = days * DAILY_PRICE;

  if (days >= MEDIUM_TERM) {
    totalAmount = days * DAILY_PRICE - MEDIUM_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    totalAmount = days * DAILY_PRICE - LONG_TERM_DISCOUNT;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
