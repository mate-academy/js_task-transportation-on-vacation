/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  let bestPrice = 0;

  if (days < 3) {
    bestPrice = PRICE * days;
  }

  if (days >= 3) {
    bestPrice = PRICE * days - SHORT_TERM_DISCOUNT;
  }

  if (days >= 7) {
    bestPrice = PRICE * days - LONG_TERM_DISCOUNT;
  }

  return bestPrice;
}

module.exports = calculateRentalCost;
