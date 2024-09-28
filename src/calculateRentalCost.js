/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISOUNT = 20;

  if (days < SHORT_TERM) {
    return days * PRICE_PER_DAY;
  }

  if (days < LONG_TERM) {
    return (days * PRICE_PER_DAY) - SHORT_TERM_DISOUNT;
  }

  return (days * 40) - LONG_TERM_DISOUNT;
}

module.exports = calculateRentalCost;
