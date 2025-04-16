/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_OFF = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const rentCost = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return rentCost - LONG_TERM_OFF;
  }

  if (days >= SHORT_TERM) {
    return rentCost - SHORT_TERM_DISCOUNT;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
