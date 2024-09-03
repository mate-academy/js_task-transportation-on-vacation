/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const SHORT_RENTAL_PERIOD = 3;
  const LONG_RENTAL_PERIOD = 7;
  const SHORT_TERMS_DISCOUNT = 20;
  const LONG_TERMS_DISCOUNT = 50;

  const baseRentalPrice = DAILY_RENT * days;

  if (days >= LONG_RENTAL_PERIOD) {
    return baseRentalPrice - LONG_TERMS_DISCOUNT;
  }

  if (days >= SHORT_RENTAL_PERIOD) {
    return baseRentalPrice - SHORT_TERMS_DISCOUNT;
  }

  return baseRentalPrice;
}

module.exports = calculateRentalCost;
