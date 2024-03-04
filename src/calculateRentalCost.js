/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DICOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DICOUNT = 50;
  const price = days * PRICE_PER_DAY;

  if (days < SHORT_TERM) {
    return price;
  }

  if (days < LONG_TERM) {
    return price - SHORT_TERM_DICOUNT;
  }

  return price - LONG_TERM_DICOUNT;
}

module.exports = calculateRentalCost;
