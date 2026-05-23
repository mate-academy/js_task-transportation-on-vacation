/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const summaryCost = days * DAILY_COST;
  const BASIC_DISCOUNT = 20;
  const SMALL_TERM = 3;
  const BIG_DISCOUNT = 50;
  const BIG_TERM = 7;

  if (days < SMALL_TERM) {
    return summaryCost;
  } else if (days < BIG_TERM) {
    return summaryCost - BASIC_DISCOUNT;
  }

  return summaryCost - BIG_DISCOUNT;
}

module.exports = calculateRentalCost;
