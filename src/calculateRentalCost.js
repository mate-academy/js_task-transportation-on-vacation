/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_DAY_RATE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return ((days * RENTAL_DAY_RATE) - LONG_TERM_DISCOUNT);
  }

  if (days < SHORT_TERM) {
    return (days * RENTAL_DAY_RATE);
  }

  return ((days * RENTAL_DAY_RATE) - SHORT_TERM_DISCOUNT);
}

module.exports = calculateRentalCost;
