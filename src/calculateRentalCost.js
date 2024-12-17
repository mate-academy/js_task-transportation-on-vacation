/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < 3) {
    return days * PRICE;
  }

  if (days >= 3 && days < 7) {
    return days * PRICE - MIDDLE_TERM_DISCOUNT;
  }

  return days * PRICE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
