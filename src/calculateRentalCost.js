/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const BASIC__PAYMENT = 40;
  const SMALL__TERM = 3;
  const BIG__TERM = 7;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const TOTAL__PAYMENT = BASIC__PAYMENT * days;

  if (days >= BIG__TERM) {
    return TOTAL__PAYMENT - BIG_DISCOUNT;
  } else if (days >= SMALL__TERM) {
    return TOTAL__PAYMENT - SMALL_DISCOUNT;
  } else if (days <= 0) {
    return 0;
  }

  return TOTAL__PAYMENT;
}

module.exports = calculateRentalCost;
