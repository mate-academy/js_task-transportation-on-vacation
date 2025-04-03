/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const SHORT_TERM_DAYS = 3;
  const PricePerDay = 40;

  if (days >= LONG_TERM_DAYS) {
    return days * PricePerDay - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return days * PricePerDay - SHORT_TERM_DISCOUNT;
  }

  return days * PricePerDay;
}

module.exports = calculateRentalCost;
