/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const TOTAL_AMOUNT = days * 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= 7) {
    return TOTAL_AMOUNT - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return TOTAL_AMOUNT - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_AMOUNT;
}

module.exports = calculateRentalCost;
