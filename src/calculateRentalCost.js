/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_ONE_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCAUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCAUNT = 50;

  const defaultPrice = days * PRICE_ONE_DAY;

  if (days >= LONG_TERM) {
    return defaultPrice - LONG_TERM_DISCAUNT;
  }

  if (days >= SHORT_TERM) {
    return defaultPrice - SHORT_TERM_DISCAUNT;
  }

  return defaultPrice;
}

module.exports = calculateRentalCost;
