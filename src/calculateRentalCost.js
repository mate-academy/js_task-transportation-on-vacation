/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 0;
  const DAILY_RENT = 40;
  const MEDIUM_TERM = 3;
  const REG_DISCOUNT = 20;
  const LONG_TERM = 7;
  const BIG_DISCOUNT = 50;

  totalCost = DAILY_RENT * days;

  if (days >= MEDIUM_TERM && days < LONG_TERM) {
    return totalCost - REG_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return totalCost - BIG_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
