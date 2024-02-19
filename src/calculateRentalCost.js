/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_DISSCOUNT = 50;
  const SHOR_TERM = 3;
  const SHORT_DISSCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= SHOR_TERM && days < LONG_TERM) {
    return basePrice - SHORT_DISSCOUNT;
  }

  if (days >= LONG_TERM) {
    return basePrice - LONG_DISSCOUNT;
  }


  return basePrice;
}

module.exports = calculateRentalCost;
