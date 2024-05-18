/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const SHORT_TERM = 3;
  const longTerm = 7;
  const SHORT_TERM_DISC = 20;
  const LONG_TERM_DISC = 50;
  const NO_DISC = PRICE * days;

  if (days >= longTerm) {
    return NO_DISC - LONG_TERM_DISC;
  }

  if (days >= SHORT_TERM && days < longTerm) {
    return NO_DISC - SHORT_TERM_DISC;
  }

  return NO_DISC;
}

module.exports = calculateRentalCost;
