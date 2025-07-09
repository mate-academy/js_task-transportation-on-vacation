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
  const totalCost = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return days * PRICE_PER_DAY - LONG_TERM_DISC;
  }

  if (days >= SHORT_TERM) {
    return days * PRICE_PER_DAY - SHORT_TERM_DISC;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
