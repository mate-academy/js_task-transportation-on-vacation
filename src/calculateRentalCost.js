/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_ONE_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const totalcost = days * PRICE_ONE_DAY;

  if (days >= LONG_TERM) {
    return totalcost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalcost - SHORT_TERM_DISCOUNT;
  }

  return totalcost;
}

module.exports = calculateRentalCost;
