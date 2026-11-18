/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILYRATE = 40;
  const LONG_TERM_DISCOUNT = 7;
  const SHORT_TERM_DISCOUNT = 3;

  const basicCost = days * DAILYRATE;

  if (days >= LONG_TERM_DISCOUNT) {
    return basicCost - 50;
  }

  if (days >= SHORT_TERM_DISCOUNT) {
    return basicCost - 20;
  }

  return basicCost;
}

module.exports = calculateRentalCost;
