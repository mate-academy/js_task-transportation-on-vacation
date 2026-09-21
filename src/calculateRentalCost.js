/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const BASIC_TERM = 3;
  const BASIC_DISCOUNT = 20;

  const total = days * DAILY_PRICE;

  if (days >= LONG_TERM) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_TERM) {
    return total - BASIC_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
