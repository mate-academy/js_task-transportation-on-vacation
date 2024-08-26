/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_COST = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  let totalAmount = 0;

  if (days >= LONG_TERM) {
    totalAmount = ONE_DAY_COST * days - LONG_TERM_DISCOUNT;

    return totalAmount;
  }

  if (days >= SHORT_TERM) {
    totalAmount = ONE_DAY_COST * days - SHORT_TERM_DISCOUNT;

    return totalAmount;
  }

  totalAmount = ONE_DAY_COST * days;

  return totalAmount;
}

module.exports = calculateRentalCost;
