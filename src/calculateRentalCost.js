/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const amount = days * dailyRate;

  if (days >= LONG_TERM) {
    return amount - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return amount - MEDIUM_TERM_DISCOUNT;
  }

  return amount;
}

module.exports = calculateRentalCost;
