/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  const BASIC_DISSCOUNT = 20;
  const ADDITIONAL_DISSCOUNT = 50;
  const PRICE_PER_DAY = 40;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - ADDITIONAL_DISSCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - BASIC_DISSCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
