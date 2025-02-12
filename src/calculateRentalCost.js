/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayPrice = 40;
  const basePrice = oneDayPrice * days;
  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days < MEDIUM_TERM) {
    return basePrice;
  }

  if (days < LONG_TERM) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
