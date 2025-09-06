/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MID_TERM_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const DAILY_RATE = 40;

  let discount = 0;

  if (days >= LONG_TERM_DAYS) {
    discount = LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM_DAYS) {
    discount = MID_TERM_DISCOUNT;
  }

  const sum = days * DAILY_RATE - discount;

  return sum;
}

module.exports = calculateRentalCost;
