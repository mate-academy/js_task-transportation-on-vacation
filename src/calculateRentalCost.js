/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  const DAILY_PRICE = 40;
  const total = days * DAILY_PRICE;

  if (days >= LONG_TERM) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return total - MEDIUM_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
