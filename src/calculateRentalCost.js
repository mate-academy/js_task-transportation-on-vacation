/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_PERIOD = 7;
  const MIDDLE_PERIOD = 3;
  const MIDDLE_DISCOND = 20;
  const BIG_DISCOND = 50;
  const PRICE = PRICE_PER_DAY * days;

  if (days < MIDDLE_PERIOD) {
    return PRICE;
  }

  if (days < LONG_PERIOD) {
    return PRICE - MIDDLE_DISCOND;
  }

  return PRICE - BIG_DISCOND;
}

module.exports = calculateRentalCost;
