/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const baseTotalAmount = days * price;

  if (days >= LONG_TERM) {
    return baseTotalAmount - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return baseTotalAmount - SHORT_TERM_DISCOUNT;
  }

  return baseTotalAmount;
}

module.exports = calculateRentalCost;
