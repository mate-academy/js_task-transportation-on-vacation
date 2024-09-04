/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const MEDIUM_TERM_STAY = 3;
  const LONG_TERM_STAY = 7;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const PRICE_PER_DAY = 40;

  const baseTotal = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_STAY) {
    return baseTotal - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_STAY) {
    return baseTotal - MEDIUM_TERM_DISCOUNT;
  }

  return baseTotal;
}

module.exports = calculateRentalCost;
