/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const dayRate = 40;

  const totalToPay = days * dayRate;

  if (days >= LONG_TERM) {
    return totalToPay - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalToPay - SHORT_TERM_DISCOUNT;
  }

  return totalToPay;
}

module.exports = calculateRentalCost;
