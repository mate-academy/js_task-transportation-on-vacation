/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const DAY_PRICE = 40;

  const BASE_TERM = 3;
  const BASE_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const fullPrice = days * DAY_PRICE;

  if (days <= 0) {
    return 0;
  }

  if (days >= LONG_TERM) {
    return fullPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= BASE_TERM) {
    return fullPrice - BASE_TERM_DISCOUNT;
  }

  return fullPrice;
}

module.exports = calculateRentalCost;
