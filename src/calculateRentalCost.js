/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(NUMBER_OF_DAYS) {
  const RENT_DAY_PRICE = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (NUMBER_OF_DAYS < SHORT_TERM) {
    return RENT_DAY_PRICE * NUMBER_OF_DAYS;
  }

  if (NUMBER_OF_DAYS < LONG_TERM) {
    return RENT_DAY_PRICE * NUMBER_OF_DAYS - SHORT_TERM_DISCOUNT;
  }

  return RENT_DAY_PRICE * NUMBER_OF_DAYS - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
