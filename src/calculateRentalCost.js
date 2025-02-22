/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const DAILY_PRICE = 40;


  if (days >= LONG_TERM) {
    return (DAILY_PRICE * days) - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return (DAILY_PRICE * days) - SHORT_TERM_DISCOUNT;
  }

  return DAILY_PRICE * days;
}

module.exports = calculateRentalCost;
