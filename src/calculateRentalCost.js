/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  let totalCost = days * dayCost;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    totalCost -= SHORT_TERM_DISCOUNT;

    return totalCost;
  }

  if (days >= LONG_TERM) {
    totalCost -= LONG_TERM_DISCOUNT;

    return totalCost;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
