/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const DAILY_RATE = 40;
  const MID_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;
  const REGULAR_PRICE = days * DAILY_RATE;

  if (days < MID_TERM_DAYS) {
    return DAILY_RATE * days;
  }

  if (days >= LONG_TERM_DAYS) {
    return DAILY_RATE * days - LONG_TERM_DISCOUNT;
  }

  return REGULAR_PRICE - MID_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
