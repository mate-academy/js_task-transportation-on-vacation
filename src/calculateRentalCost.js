/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_PERIODS_RENT = 7;
  const LONG_PERIODS_RENT_DISCOUNT = 50;
  const SHORT_PERIODS_RENT = 3;
  const SHORT_PERIODS_RENT_DISCOUNT = 20;
  const TOTAL = days * PRICE_PER_DAY;

  if (days >= LONG_PERIODS_RENT) {
    return TOTAL - LONG_PERIODS_RENT_DISCOUNT;
  }

  if (days >= SHORT_PERIODS_RENT && days < LONG_PERIODS_RENT) {
    return TOTAL - SHORT_PERIODS_RENT_DISCOUNT;
  }

  return TOTAL;
}

module.exports = calculateRentalCost;
