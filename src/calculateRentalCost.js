/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PAY_FOR_DAY = 40;
  const total = PAY_FOR_DAY * days;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;

  if (days >= MID_TERM && days < LONG_TERM) {
    return total - MID_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return total - LONG_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
