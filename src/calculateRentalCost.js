/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCONT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCONT = 20;
  const basePrise = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrise - LONG_TERM_DISCONT;
  }

  if (days >= SHORT_TERM) {
    return basePrise - SHORT_TERM_DISCONT;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
