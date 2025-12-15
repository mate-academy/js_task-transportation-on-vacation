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
  let amount = 0;

  if (days < MEDIUM_TERM) {
    amount = days * dailyRate;
  }

  if (days >= MEDIUM_TERM && days < LONG_TERM) {
    amount = days * dailyRate - MEDIUM_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    amount = days * dailyRate - LONG_TERM_DISCOUNT;
  }

  return amount;
}

module.exports = calculateRentalCost;
