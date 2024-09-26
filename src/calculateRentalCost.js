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
  const basePrice = days * PRICE_PER_DAY;

  const amount = {
    [days < SHORT_TERM]: basePrice,
    [days >= SHORT_TERM && days < LONG_TERM]: basePrice - SHORT_TERM_DISCOUNT,
    [days >= LONG_TERM]: basePrice - LONG_TERM_DISCOUNT,
  };

  return amount[true];
}

module.exports = calculateRentalCost;
