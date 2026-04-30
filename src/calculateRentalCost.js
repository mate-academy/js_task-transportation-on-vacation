/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const THREE_DAYS_TERM = 3;
  const THREE_DAYS_TERM_DISCOUNT = 20;

  const result = days * 40;

  if (days >= LONG_TERM) {
    return result - LONG_TERM_DISCOUNT;
  }

  if (days >= THREE_DAYS_TERM) {
    return result - THREE_DAYS_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
