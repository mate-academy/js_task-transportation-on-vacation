/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MID_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const DAILY_RATE = 40;
  const TOTAL_PRICE = DAILY_RATE * days;

  if (days >= LONG_TERM_DAYS) {
    return TOTAL_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return TOTAL_PRICE - MID_TERM_DISCOUNT;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
