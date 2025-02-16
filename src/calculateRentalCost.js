/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_PRICE = 40;
  const LONG_TERM = 7;
  const AVERAGE_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const AVERAGE_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * RENTAL_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= AVERAGE_TERM) {
    return days * RENTAL_PRICE - AVERAGE_TERM_DISCOUNT;
  }

  return days * RENTAL_PRICE;
}

module.exports = calculateRentalCost;
