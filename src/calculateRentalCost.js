/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_FEE = 40;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const subtotal = DAILY_FEE * days;

  if (days > 0) {
    if (days >= LONG_TERM) {
      return subtotal - LONG_TERM_DISCOUNT;
    }

    if (days >= MID_TERM) {
      return subtotal - MID_TERM_DISCOUNT;
    }

    return subtotal;
  }

  throw new Error('Invalid number of days');
}

module.exports = calculateRentalCost;
