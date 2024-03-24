/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MID_TERM = 3;
  const LONG_TERM = 7;
  const DAILY_RENT = 40;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const BASIC_PRICE = days * DAILY_RENT;

  if (days < MID_TERM) {
    return BASIC_PRICE;
  }

  if (days < LONG_TERM) {
    return BASIC_PRICE - MID_TERM_DISCOUNT;
  }

  return BASIC_PRICE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
