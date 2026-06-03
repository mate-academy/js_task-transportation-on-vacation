/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_THRESHOLD = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  const cost = days * DAILY_PRICE;

  if (days >= LONG_TERM_THRESHOLD) {
    return cost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_THRESHOLD) {
    return cost - MEDIUM_TERM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
