/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const BASIC_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < 3) {
    return PRICE_PER_DAY * days;
  }

  if (days >= 3 && days <= 6) {
    return PRICE_PER_DAY * days - BASIC_DISCOUNT;
  }

  if (days >= 3 && days <= 6) {
    return PRICE_PER_DAY * days - BASIC_DISCOUNT;
  }

  if (days >= 7) {
    return PRICE_PER_DAY * days - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
