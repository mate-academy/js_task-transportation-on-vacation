/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_FOR_DAY = 40;
  const DISCOUNT_FOR_SHORT_TRIP = 20;
  const DISCOUNT_FOR_LONG_TRIP = 50;
  const SHORT_TERM_TRIP = 3;
  const LONG_TERM_TRIP = 7;

  const price = days * PRICE_FOR_DAY;

  if (days >= LONG_TERM_TRIP) {
    return price - DISCOUNT_FOR_LONG_TRIP;
  }

  if (days >= SHORT_TERM_TRIP) {
    return price - DISCOUNT_FOR_SHORT_TRIP;
    ;
  }

  return price;
}

module.exports = calculateRentalCost;
