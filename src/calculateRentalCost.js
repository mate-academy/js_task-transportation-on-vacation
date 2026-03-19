/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_RENTAL_DISCOUNT = 50;
  const BASIC_DISCOUNT = 20;
  const LONG_RENTAL_DISCOUNT_THRESHOLD = 7;
  const BASIC_DISCOUNT_THRESHOLD = 3;
  const total = days * COST_PER_DAY;

  if (days >= LONG_RENTAL_DISCOUNT_THRESHOLD) {
    return total - LONG_RENTAL_DISCOUNT;
  }

  if (days >= BASIC_DISCOUNT_THRESHOLD) {
    return total - BASIC_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
