/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= 7) {
    return RENT_PRICE * days - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return RENT_PRICE * days - SHORT_TERM_DISCOUNT;
  }

  return RENT_PRICE * days;
}

module.exports = calculateRentalCost;
