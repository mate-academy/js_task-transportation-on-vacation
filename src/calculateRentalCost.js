/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >=7) {
    return days * PRICE - LONG_TERM_DISCOUNT;
  } else if (days >= 3) {
    return days * PRICE - SHORT_TERM_DISCOUNT;
  }

  return days * PRICE;
}

module.exports = calculateRentalCost;
