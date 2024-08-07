/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  let totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    totalCost -= LONG_TERM_DISCOUNT;
  } else if (days >= MEDIUM_TERM) {
    totalCost -= MEDIUM_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
