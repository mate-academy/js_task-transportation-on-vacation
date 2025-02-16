/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const BASIC_TERM = 3;
  const BASIC_TERM_DISCOUNT = 20;

  let totalPrice = days * COST_PER_DAY;

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_TERM) {
    return totalPrice - BASIC_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
