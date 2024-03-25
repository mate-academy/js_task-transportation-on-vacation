/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DEY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  let totalAmount = PRICE_PER_DEY * days;

  if (days >= LONG_TERM) {
    return totalAmount - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return (totalAmount = totalAmount - SHORT_TERM_DISCOUNT);
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
