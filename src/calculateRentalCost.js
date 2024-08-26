/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(daysRented) {
  const DAILY_BASE_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let totalCost = daysRented * DAILY_BASE_COST;

  if (daysRented >= LONG_TERM) {
    return (totalCost -= LONG_TERM_DISCOUNT);
  }

  if (daysRented >= SHORT_TERM) {
    return (totalCost -= SHORT_TERM_DISCOUNT);
  }

  return totalCost;
}

module.exports = calculateRentalCost;
