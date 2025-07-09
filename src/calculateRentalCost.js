/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PAY_OF_DAY = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const DISCOUNT_LONG_TERM = 50;
  const MIN_TERM_RENTAL_DAYS = 3;
  const MIN_DISCOUNT_TERM = 20;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return days * PAY_OF_DAY - DISCOUNT_LONG_TERM;
  }

  if (days >= MIN_TERM_RENTAL_DAYS) {
    return days * PAY_OF_DAY - MIN_DISCOUNT_TERM;
  }

  return days * PAY_OF_DAY;
}

module.exports = calculateRentalCost;
