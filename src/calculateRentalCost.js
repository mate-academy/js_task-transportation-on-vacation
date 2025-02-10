/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE = 40;
  const AVERAGE_TERM = 3;
  const AVERAGE_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = PRICE * days;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= AVERAGE_TERM) {
    return basePrice - AVERAGE_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
