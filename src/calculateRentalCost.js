/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PAYMENT = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return days * PAYMENT;
  } else {
    if (days < LONG_TERM) {
      return (days * PAYMENT) - SHORT_TERM_DISCOUNT;
    }

    return (days * PAYMENT) - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
