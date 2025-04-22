/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const MEDIUM_TERM = 3;
  const LONG_TERM = 7;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const TOTAL_AMOUNT = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return TOTAL_AMOUNT - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return TOTAL_AMOUNT - MEDIUM_TERM_DISCOUNT;
  }

  return TOTAL_AMOUNT;
}

module.exports = calculateRentalCost;
