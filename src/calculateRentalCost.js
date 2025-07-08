/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const LONG_TERM_DISCOUNT = 50;
  const LOW_TERM_DISCOUNT = 20;

  if (days <= 2) {
    return days * cost;
  }

  if (days >= 7) {
    return days * cost - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return days * cost - LOW_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
