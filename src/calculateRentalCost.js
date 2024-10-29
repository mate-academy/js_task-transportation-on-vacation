/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAY_RENT = 40;
  const SHORT_TERM_DISCOUNT = -20;
  const LONG_TERM_DISCOUNT = -50;

  if (days >= 3 && days < 7) {
    return DAY_RENT * days + SHORT_TERM_DISCOUNT;
  }

  if (days >= 7) {
    return DAY_RENT * days + LONG_TERM_DISCOUNT;
  }

  return DAY_RENT * days;
}

module.exports = calculateRentalCost;
