/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const priceDay = 40;
  const totalAmount = priceDay * days;

  if (days >= LONG_TERM) {
    return totalAmount - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return totalAmount - MIDDLE_TERM_DISCOUNT;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
