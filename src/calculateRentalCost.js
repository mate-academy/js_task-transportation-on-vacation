/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const PRICE_PER_DAY = 40;
  const SMALL_DISCOUNT = 20;
  const SHORT_VACATION = 3;
  const LONG_VACATION = 7;
  const BIG_DISCOUNT = 50;
  let TOTAL_COUNT = days * PRICE_PER_DAY;

  if (days >= LONG_VACATION) {
    TOTAL_COUNT -= BIG_DISCOUNT;

    return TOTAL_COUNT;
  }

  if (days >= SHORT_VACATION) {
    TOTAL_COUNT -= SMALL_DISCOUNT;

    return TOTAL_COUNT;
  }

  return TOTAL_COUNT;
}

module.exports = calculateRentalCost;
