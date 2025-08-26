/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const MIDL_TERM = 3;
  const MIDL_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  let TOTAL_DISCOUNT = 0;

  if (days >= MIDL_TERM && days <= LONG_TERM) {
    TOTAL_DISCOUNT = MIDL_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    TOTAL_DISCOUNT = LONG_TERM_DISCOUNT;
  }

  return days * DAILY_COST - TOTAL_DISCOUNT;
}

module.exports = calculateRentalCost;
