/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT = 40;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    return RENT * days - MIDDLE_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return RENT * days - LONG_TERM_DISCOUNT;
  }

  return RENT * days;
}

module.exports = calculateRentalCost;
