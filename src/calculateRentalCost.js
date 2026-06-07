/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;

  const totalPrice = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return totalPrice - MEDIUM_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
