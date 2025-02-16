/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const payPerDay = 40;
  const SumPerDay = days * payPerDay;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  if (days >= LONG_TERM) {
    return SumPerDay - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return SumPerDay - SMALL_DISCOUNT;
  }

  return SumPerDay;
}

module.exports = calculateRentalCost;
