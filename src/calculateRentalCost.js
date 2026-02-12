/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  let finalCost = ONE_DAY_PRICE * days;

  if (days >= LONG_TERM) {
    return finalCost - LONG_TERM_DISCOUNT;
  }
  else if (days >= SHORT_TERM) {
    return finalCost - SHORT_TERM_DISCOUNT;
  }

  return finalCost;

}

module.exports = calculateRentalCost;
