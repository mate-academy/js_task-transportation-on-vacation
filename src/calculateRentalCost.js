/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  const dayPrice = 40;
  const total = dayPrice * days;

  if (days >= LONG_TERM) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM && days < LONG_TERM) {
    return total - MID_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
