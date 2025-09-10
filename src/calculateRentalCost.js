/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const RENTAL_PRICE = 40;
  const MIN_RENT_DAYS = 3;
  const MAX_RENT_DAYS = 7;
  const REGULAR_PRICE = days * RENTAL_PRICE;

  if (days < MIN_RENT_DAYS) {
    return RENTAL_PRICE * days;
  }

  if (days >= MAX_RENT_DAYS) {
    return RENTAL_PRICE * days - BIG_DISCOUNT;
  }

  return REGULAR_PRICE - DISCOUNT;
}

module.exports = calculateRentalCost;
