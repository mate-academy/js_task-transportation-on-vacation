/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DEFAULT_RENT_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const totalPriceWithNoDiscount = days * DEFAULT_RENT_PRICE;

  if (days < SHORT_TERM) {
    return totalPriceWithNoDiscount;
  }

  return days >= LONG_TERM
    ? totalPriceWithNoDiscount - LONG_TERM_DISCOUNT
    : totalPriceWithNoDiscount - SHORT_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
