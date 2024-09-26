/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const LONG_TIME = 7;
  const SALE_LONG_TIME = 50;
  const SHORT_TIME = 3;
  const SALE_SHORT_TIME = 20;

  const totalCost = DAILY_RENT * days;

  if (days >= LONG_TIME) {
    return totalCost - SALE_LONG_TIME;
  }

  if (days >= SHORT_TIME) {
    return totalCost - SALE_SHORT_TIME;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
