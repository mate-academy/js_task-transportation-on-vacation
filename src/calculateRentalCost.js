/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days <= 0) {
    return 'The minimum booking period is 1 day ';
  }

  if (days >= LONG_TERM) {
    return RENT_PRICE * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENT_PRICE * days - SHORT_TERM_DISCOUNT;
  }

  return RENT_PRICE * days;
}

module.exports = calculateRentalCost;
