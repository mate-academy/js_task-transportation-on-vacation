/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const STANDART_COAST = 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MIDEL_TERM = 3;
  const MIDEL_TERM_DISCOUNT = 20;

  const standartPrice = days * STANDART_COAST;

  if (days < MIDEL_TERM) {
    return standartPrice;
  }

  if (days < LONG_TERM) {
    return standartPrice - MIDEL_TERM_DISCOUNT;
  }

  return standartPrice - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
