/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const ONE_DAY_COST = 40;

  const totallyCost = days * ONE_DAY_COST;

  if (days >= LONG_TERM) {
    return totallyCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totallyCost - SHORT_TERM_DISCOUNT;
  }

  return totallyCost;
}

module.exports = calculateRentalCost;
