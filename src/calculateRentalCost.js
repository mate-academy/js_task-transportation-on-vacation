/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const SHORT_TERM_THRESHOLD = 3;
  const LONG_TERM = 7;
  const baseCost = days * DAILY_COST;
  const discountFor3To6Days = 20;
  const additionalDiscountFor7OrMoreDays = 50;
  const totalCostFor3To6Days = baseCost - discountFor3To6Days;
  const totalCostFor7OrMoreDays = baseCost - additionalDiscountFor7OrMoreDays;
  const totalCostForLessThan3Days = baseCost;

  if (days >= LONG_TERM) {
    return totalCostFor7OrMoreDays;
  } else if (days >= SHORT_TERM_THRESHOLD) {
    return totalCostFor3To6Days;
  } else {
    return totalCostForLessThan3Days;
  }
}

module.exports = calculateRentalCost;
