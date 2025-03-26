/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const MIDDLE_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;

  if (days >= LONG_TERM) {
    return PRICE_PER_DAY * days - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return PRICE_PER_DAY * days - MIDDLE_TERM_DISCOUNT;
  }

  return PRICE_PER_DAY * days;
}

module.exports = calculateRentalCost;
