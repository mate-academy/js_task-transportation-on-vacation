/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const THREE_DAYS_DISCOUNT = 20;
  const SEVEN_DAYS_DISCOUNT = 50;
  const LONG_TERM = 7;
  const MEDIUM_RENTAL_PERIOD = 3;

  if (days < MEDIUM_RENTAL_PERIOD) {
    return days * BASE_PRICE;
  }

  if (days >= MEDIUM_RENTAL_PERIOD && days < LONG_TERM) {
    return days * BASE_PRICE - THREE_DAYS_DISCOUNT;
  }

  return days * BASE_PRICE - SEVEN_DAYS_DISCOUNT;
}

module.exports = calculateRentalCost;
