/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_PRICE = 40;
  const MIDLE_TERM = 3;
  const MIDLE_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= MIDLE_TERM && days < LONG_TERM) {
    return RENTAL_PRICE * days - MIDLE_TERM_DISCOUNT;
  } else if (days >= LONG_TERM) {
    return RENTAL_PRICE * days - LONG_TERM_DISCOUNT;
  } else {
    return RENTAL_PRICE * days;
  }
}

module.exports = calculateRentalCost;
