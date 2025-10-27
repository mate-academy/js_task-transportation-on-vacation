/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_OF_CAR = 40;
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;
  const LONG_RENTAL_PERIOD_DAYS = 7;
  const SHORT_RENTAL_PERIOD_DAYS = 3;

  const PRICE = days * RENT_OF_CAR;

  if (days >= LONG_RENTAL_PERIOD_DAYS) {
    return PRICE - LONG_DISCOUNT;
  }

  if (days >= SHORT_RENTAL_PERIOD_DAYS) {
    return PRICE - SHORT_DISCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
