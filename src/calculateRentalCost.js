/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return days * DAILY_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return days * DAILY_PRICE - MEDIUM_TERM_DISCOUNT;
  }

  return days * DAILY_PRICE;
}

module.exports = calculateRentalCost;
