/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRISE = 40;
  const DISCONT_LONG_TERM = 50;
  const DISCONT_SHORTTERM = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  if (days >= LONG_TERM) {
    return BASE_PRISE * days - DISCONT_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return BASE_PRISE * days - DISCONT_SHORTTERM;
  }

    return BASE_PRISE * days;
}

module.exports = calculateRentalCost;
