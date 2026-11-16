/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_RENTAL = 7;
  const SHORT_RENTAL = 3;
  const LONG_RENTAL_DISCOUNT = 50;
  const SHORT_RENTAL_DISCOUNT = 20;
  const price = days * DAILY_RATE;

  if (days >= LONG_RENTAL) {
    return price - LONG_RENTAL_DISCOUNT;
  }

  if (days >= SHORT_RENTAL) {
    return price - SHORT_RENTAL_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
