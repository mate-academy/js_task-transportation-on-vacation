/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const AMOUNT_FOR_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;

  const AMOUNT = days * AMOUNT_FOR_DAY;

  if (days >= LONG_TERM) {
    return AMOUNT - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return AMOUNT - SMALL_DISCOUNT;
  }

  return AMOUNT;
}

module.exports = calculateRentalCost;
