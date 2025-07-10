/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const LONG_TERM = 7;
  const MIDLE_TERM = 3;
  const LONG_DISCOUNT = 50;
  const MIDLE_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * BASE_PRICE - LONG_DISCOUNT;
  }

  if (days >= MIDLE_TERM) {
    return days * BASE_PRICE - MIDLE_DISCOUNT;
  }

  return days * BASE_PRICE;
}

module.exports = calculateRentalCost;
