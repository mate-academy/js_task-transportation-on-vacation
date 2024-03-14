/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;

  const SMALL_PERIOD = 3;
  const SMALL_PERIOD_DISCOUNT = 20;

  const BIG_PERIOD = 7;
  const BIG_PERIOD_DISCOUNT = 50;

  const TOTAL_RENTAL_PRICE = days * PRICE_PER_DAY;

  if (days >= BIG_PERIOD) {
    return TOTAL_RENTAL_PRICE - BIG_PERIOD_DISCOUNT;
  }

  if (days >= SMALL_PERIOD) {
    return TOTAL_RENTAL_PRICE - SMALL_PERIOD_DISCOUNT;
  }

  return TOTAL_RENTAL_PRICE;
}

module.exports = calculateRentalCost;
