/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAY_RENT = 40;
  const LONG_TERM = 7;
  const MIDL_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MIDL_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * DAY_RENT - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDL_TERM) {
    return days * DAY_RENT - MIDL_TERM_DISCOUNT;
  }

  return days * DAY_RENT;
}

module.exports = calculateRentalCost;
