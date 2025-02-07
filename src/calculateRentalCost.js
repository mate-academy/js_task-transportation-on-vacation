/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_RENTAL_DAYS = 3;
  const LONG_RENTAL_DAYS = 7;
  const PRICE_PER_DAY = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;

  const totalPrice = PRICE_PER_DAY * days;

  if (days < SHORT_RENTAL_DAYS) {
    return totalPrice;
  }

  if (days < LONG_RENTAL_DAYS) {
    return totalPrice - DISCOUNT_3_DAYS;
  }

  return totalPrice - DISCOUNT_7_DAYS;
}

module.exports = calculateRentalCost;
