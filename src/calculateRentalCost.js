/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;
  const PRICE = 40;

  const priceWithoutDiscount = days * PRICE;

  return days >= LONG_TERM
    ? priceWithoutDiscount - LONG_DISCOUNT
    : days >= SHORT_TERM
      ? priceWithoutDiscount - SHORT_DISCOUNT
      : priceWithoutDiscount;
}

module.exports = calculateRentalCost;
