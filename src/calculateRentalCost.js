/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAY_PAYMENT = 40;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const TOTAL_PRICE = days * DAY_PAYMENT;

  if (days >= LONG_TERM) {
    return TOTAL_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return TOTAL_PRICE - MIDDLE_TERM_DISCOUNT;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
