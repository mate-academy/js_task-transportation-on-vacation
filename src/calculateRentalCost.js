/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_FER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCONT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCONT = 20;

  if (days >= LONG_TERM) {
    return days * PRICE_FER_DAY - LONG_TERM_DISCONT;
  }

  if (days >= SHORT_TERM) {
    return days * PRICE_FER_DAY - SHORT_TERM_DISCONT;
  }

  return days * PRICE_FER_DAY;
}

module.exports = calculateRentalCost;
