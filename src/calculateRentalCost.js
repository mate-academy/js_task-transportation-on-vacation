/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const res = days * 40;
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return res - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return res - MID_TERM_DISCOUNT;
  }

  return res;
}

module.exports = calculateRentalCost;
