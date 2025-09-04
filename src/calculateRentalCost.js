/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const SMALL_TERM = 3;
  const SMALL_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const totalPrice = RENT_COST * days;

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SMALL_TERM) {
    return totalPrice - SMALL_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
