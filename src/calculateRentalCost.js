/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_PRICE = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return days * RENTAL_PRICE;
  }

  if (days < LONG_TERM) {
    return days * RENTAL_PRICE - SHORT_TERM_DISCOUNT;
  }

  return days * RENTAL_PRICE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
