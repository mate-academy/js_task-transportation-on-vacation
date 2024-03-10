/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const ONE_WEEK = 7;
  const ONE_WEEK_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= ONE_WEEK) {
    return days * DAILY_RENT - ONE_WEEK_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * DAILY_RENT - SHORT_TERM_DISCOUNT;
  }

  return days * DAILY_RENT;
}

module.exports = calculateRentalCost;
