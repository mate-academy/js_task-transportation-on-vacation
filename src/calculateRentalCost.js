/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_PRICE = 40;
  const MID_TERM = 3;
  const LONG_TERM = 7;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return days * DAILY_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return days * DAILY_PRICE - MID_TERM_DISCOUNT;
  }

  return days * DAILY_PRICE;
}

module.exports = calculateRentalCost;
