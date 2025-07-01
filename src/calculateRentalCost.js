/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAYS = 40;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  let totalCost = days * PRICE_PER_DAYS;

  if (days >= LONG_TERM) {
    return (totalCost -= LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (totalCost -= SHORT_TERM_DISCOUNT);
  }

  return totalCost;
}

module.exports = calculateRentalCost;
