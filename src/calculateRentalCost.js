/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PAYMENT = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const SHORT_TERM_RENTAL_DAYS = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  let sum = days * PAYMENT;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    sum -= LONG_TERM_DISCOUNT;

    return sum;
  }

  if (days >= SHORT_TERM_RENTAL_DAYS) {
    sum -= SHORT_TERM_DISCOUNT;

    return sum;
  }

  return sum;
}

module.exports = calculateRentalCost;
