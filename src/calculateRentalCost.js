/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const AVERAGE_TERM = 3;
  const AVERAGE_TERM_DISCOUNT = 20;
  const basePrice = days * price;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  } else if (days >= AVERAGE_TERM) {
    return basePrice - AVERAGE_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
