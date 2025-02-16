/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SMALL_DISCOUNT = 20;
  const SHORT_RENTAL_PERIOD = 3;
  const BIG_DISCOUNT = 50;
  const LONG_RENTAL_PERIOD = 7;
  const fullRentalPrice = 40 * days;

  if (days >= SHORT_RENTAL_PERIOD && days < LONG_RENTAL_PERIOD) {
    return fullRentalPrice - SMALL_DISCOUNT;
  }

  if (days >= LONG_RENTAL_PERIOD) {
    return fullRentalPrice - BIG_DISCOUNT;
  }

  return fullRentalPrice;
}

module.exports = calculateRentalCost;
