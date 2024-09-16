/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const AMOUNT_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * AMOUNT_PER_DAY - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * AMOUNT_PER_DAY - SHORT_DISCOUNT;
  }

  return days * AMOUNT_PER_DAY;
}

module.exports = calculateRentalCost;
