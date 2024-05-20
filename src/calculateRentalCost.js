/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISC = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISC = 20;

  if (days < SHORT_TERM) {
    return PRICE_PER_DAY * days;
  }

  if (days >= LONG_TERM) {
    return PRICE_PER_DAY * days - LONG_TERM_DISC;
  }

  if (days >= SHORT_TERM) {
    return PRICE_PER_DAY * days - SHORT_TERM_DISC;
  }
}

module.exports = calculateRentalCost;
