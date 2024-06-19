/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT__TERM = 3;
  const SHORT__DISCOUNT = 20;
  const LONG__TERM = 7;
  const LONG__DISCOUNT = 50;
  const PRICE = 40;

  const priceWithoutDiscount = days * PRICE;

  return days >= LONG__TERM
    ? priceWithoutDiscount - LONG__DISCOUNT
    : days >= SHORT__TERM
      ? priceWithoutDiscount - SHORT__DISCOUNT
      : priceWithoutDiscount;
}

module.exports = calculateRentalCost;
