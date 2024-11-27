/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const rentCostBasic = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return rentCostBasic - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return rentCostBasic - SHORT_TERM_DISCOUNT;
  }

  return rentCostBasic;
}

module.exports = calculateRentalCost;
