/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_RENT_DAYS = 7;
  const SHORT_RENT_DAYS = 3;
  const LONG_DISCONT = 50;
  const SHORT_DISCONT = 20;
  const PRICE_BASIC = days * PRICE_PER_DAY;

  if (days >= LONG_RENT_DAYS) {
    return PRICE_BASIC - LONG_DISCONT;
  }

  if (days >= SHORT_RENT_DAYS) {
    return PRICE_BASIC - SHORT_DISCONT;
  }

  return PRICE_BASIC;
}

module.exports = calculateRentalCost;
