/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_CAR_PER_DAY = 40;
  const SMALL_TERM = 3;
  const SMALL_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const RENTAL_COST = days * RENT_CAR_PER_DAY;

  if (days < SMALL_TERM) {
    return RENTAL_COST;
  }

  if (days >= SMALL_TERM && days < LONG_TERM) {
    return RENTAL_COST - SMALL_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return RENTAL_COST - LONG_TERM_DISCOUNT;
  }

  return RENTAL_COST;
}

module.exports = calculateRentalCost;
