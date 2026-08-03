/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const LONG_TERM = days;
  const LONG_TERM_DISCOUNT = 40;

  const finalPrice = LONG_TERM * LONG_TERM_DISCOUNT;

  if (days >= 7) {
    return finalPrice - 50;
  }

  if (days >= 3) {
    return finalPrice - 20;
  }

  return finalPrice;
}

module.exports = calculateRentalCost;
