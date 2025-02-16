/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const price = days * PRICE_PER_DAY;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SHORTDISCOUNT = 20;
  const LONGDISCOUNT = 50;

  if (days >= LONG_TERM) {
    return PRICE - LONGDISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PRICE - SHORTDISCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
