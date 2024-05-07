/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const WRONG_TERM = 0;
  const STANDART_COST = days * 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days > WRONG_TERM) {
    if (days < SHORT_TERM) {
      return STANDART_COST;
    }

    if (days >= SHORT_TERM && days < LONG_TERM) {
      return STANDART_COST - SHORT_TERM_DISCOUNT;
    }

    return STANDART_COST - LONG_TERM_DISCOUNT;
  }

  return 'Days cannot be negative or equal to zero!';
}

module.exports = calculateRentalCost;
