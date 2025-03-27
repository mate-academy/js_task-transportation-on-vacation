/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const MID_TERM_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  const totalAmount = DAILY_RATE * days;

  if (days >= LONG_TERM_DAYS) {
    return totalAmount - LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM_DAYS) {
    return totalAmount - MID_TERM_DISCOUNT;
  }

  return totalAmount;
}
module.exports = calculateRentalCost;
