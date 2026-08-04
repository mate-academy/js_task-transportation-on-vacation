/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAYS_PAYMEN = 40 * days;
  const MIDLL_TERM = 3;
  const MIDLL_TERM_DISCOUNT = DAYS_PAYMEN - 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = DAYS_PAYMEN - 50;

  if (days >= LONG_TERM) {
    return LONG_TERM_DISCOUNT;
  }

  if (days >= MIDLL_TERM) {
    return MIDLL_TERM_DISCOUNT;
  }

  return DAYS_PAYMEN;
}

module.exports = calculateRentalCost;
