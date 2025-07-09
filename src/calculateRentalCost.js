/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_PRICE = 40;
  const DISCOUNT_SHORT_TERM = 20;
  const DISCOUNT_LONG_TERM = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  let totalCost = 0;

  totalCost = days * DAILY_RENTAL_PRICE;

  if (days >= LONG_TERM) {
    totalCost -= DISCOUNT_LONG_TERM;
  } else if (days >= SHORT_TERM) {
    totalCost -= DISCOUNT_SHORT_TERM;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
