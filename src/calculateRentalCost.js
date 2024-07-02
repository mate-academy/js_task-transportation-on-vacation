/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const payPerDay = 40;
  const DAYS_FOR_MAX_DISCOUNT = 7;
  const DAYS_FOR_MIN_DISCOUNT = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MIN_TERM_DISCOUNT = 20;

  if (days >= DAYS_FOR_MAX_DISCOUNT) {
    return payPerDay * days - LONG_TERM_DISCOUNT;
  }

  if (days >= DAYS_FOR_MIN_DISCOUNT) {
    return payPerDay * days - MIN_TERM_DISCOUNT;
  }

  return payPerDay * days;
}

module.exports = calculateRentalCost;
