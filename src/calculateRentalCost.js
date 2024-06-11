/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_DISC = 50;
  const MIDL_TERM_DISC = 20;
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const MIDL_TERM = 3;

  if (days >= LONG_TERM) {
    return PRICE_PER_DAY * days - LONG_TERM_DISC;
  }

  if (days >= MIDL_TERM) {
    return PRICE_PER_DAY * days - MIDL_TERM_DISC;
  }

  return PRICE_PER_DAY * days;
}

module.exports = calculateRentalCost;
