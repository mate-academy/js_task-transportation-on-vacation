/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT = 40;
  const TOTAL_RENT = DAY_RENT * days;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDL_TERM = 3;
  const MIDL_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return TOTAL_RENT - LONG_TERM_DISCOUNT;
  } else if (days >= MIDL_TERM) {
    return TOTAL_RENT - MIDL_TERM_DISCOUNT;
  }

  return TOTAL_RENT;
}

module.exports = calculateRentalCost;
