/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const AMOUNT_PER_DAY = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const totalAmount = days * AMOUNT_PER_DAY;

  if (days >= 7) {
    return totalAmount - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return totalAmount - SHORT_TERM_DISCOUNT;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
