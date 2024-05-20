/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  let rentCar = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    rentCar -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    rentCar -= SHORT_TERM_DISCOUNT;
  }

  return rentCar;
}

module.exports = calculateRentalCost;
