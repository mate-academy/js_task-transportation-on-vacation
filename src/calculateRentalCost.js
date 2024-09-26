/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAYS_RENT = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return (DAYS_RENT * days) - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return (DAYS_RENT * days) - SHORT_TERM_DISCOUNT;
  }

  return days * DAYS_RENT;

}

module.exports = calculateRentalCost;
