/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const NUMBER_OF_DAY = 50;
  const PRICE_THE_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * PRICE_THE_DAY - NUMBER_OF_DAY;
  }

  if (days >= SHORT_TERM) {
    return days * PRICE_THE_DAY - SHORT_TERM_DISCOUNT;
  }

  return days * PRICE_THE_DAY;
}

module.exports = calculateRentalCost;
