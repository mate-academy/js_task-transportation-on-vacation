/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const TOTAL_AMOUNT = days * 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_DAYS = 7;
  const SHORT_DAYS = 3;

  if (days >= LONG_DAYS) {
    return TOTAL_AMOUNT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_DAYS) {
    return TOTAL_AMOUNT - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_AMOUNT;
}

module.exports = calculateRentalCost;
