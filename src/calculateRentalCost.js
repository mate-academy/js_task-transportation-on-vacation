/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILYRATE = 40;

  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCONT = 50;

  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const basicCost = days * DAILYRATE;

  if (days >= LONG_TERM_DAYS) {
    return basicCost - LONG_TERM_DISCONT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return basicCost - SHORT_TERM_DISCOUNT;
  }

  return basicCost;
}

module.exports = calculateRentalCost;
