/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PAYMENT = 40;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return DAY_PAYMENT * days - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return DAY_PAYMENT * days - MID_TERM_DISCOUNT;
  }

  return DAY_PAYMENT * days;
}

module.exports = calculateRentalCost;
