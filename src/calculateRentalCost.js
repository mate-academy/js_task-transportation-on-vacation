/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const MID_TERM_THRESHOLD = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days < MID_TERM_THRESHOLD) {
    return DAILY_PRICE * days;
  }

  if (days < LONG_TERM_THRESHOLD) {
    return DAILY_PRICE * days - MID_TERM_DISCOUNT;
  }

  return DAILY_PRICE * days - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
