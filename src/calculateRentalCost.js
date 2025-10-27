/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const sum = days * DAILY_RENT;
  const MID_TERM = 3;
  const LONG_TERM = 7;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= MID_TERM && days < LONG_TERM) {
    return sum - MID_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return sum - LONG_TERM_DISCOUNT;
  }

  return sum;
}

module.exports = calculateRentalCost;
