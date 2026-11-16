/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LT_DISCOUNT = 50;
  const ST_DISCOUNT = 20;
  const DAY_PRICE = 40;

  const daysAmount = days;
  const totalCost = daysAmount * DAY_PRICE;

  if (daysAmount >= LONG_TERM) {
    return totalCost - LT_DISCOUNT;
  }

  if (daysAmount >= SHORT_TERM) {
    return totalCost - ST_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
