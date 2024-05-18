/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PAY_PER_DAY = 40;
  const SUM_PER_DAY = days * PAY_PER_DAY;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  if (days >= LONG_TERM) {
    return SUM_PER_DAY - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return SUM_PER_DAY - SMALL_DISCOUNT;
  }

  return SUM_PER_DAY;
}

module.exports = calculateRentalCost;
