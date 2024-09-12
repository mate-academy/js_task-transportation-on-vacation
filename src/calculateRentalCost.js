/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const totalAmount = days * RENT_PER_DAY;

  if (days >= 3 && days < 7) {
    return totalAmount - SHORT_TERM_DISCOUNT;
  } else if (days >= 7) {
    return totalAmount - LONG_TERM_DISCOUNT;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
