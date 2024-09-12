/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRISE_ONE_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const TERM_DISCOUNT = 20;
  const totalPrice = days * PRISE_ONE_DAY;

  if (days < SHORT_TERM) {
    return totalPrice;
  }

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  return totalPrice - TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
