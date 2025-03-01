/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_PRICE = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  let PRICE_FOR_DAYS = days * ONE_DAY_PRICE;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    PRICE_FOR_DAYS -= 20;
  }

  if (days >= LONG_TERM) {
    PRICE_FOR_DAYS -= 50;
  }

  return PRICE_FOR_DAYS;
}

module.exports = calculateRentalCost;
