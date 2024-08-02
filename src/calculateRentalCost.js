/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const costForDays = days * PRICE;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return costForDays - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return costForDays - SHORT_TERM_DISCOUNT;
  }

  return costForDays;
}

module.exports = calculateRentalCost;
