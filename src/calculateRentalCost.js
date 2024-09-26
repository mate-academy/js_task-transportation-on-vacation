/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_A_DAY = 40;
  const SMALLEST_DISCOUNT = 20;
  const BIGGEST_DISCOUNT = 50;
  const PRICE_PER_DAY = days * COST_A_DAY;
  const SMALLEST_DAYS = 3;
  const BIGGEST_DAYS = 7;

  if (days >= BIGGEST_DAYS) {
    return PRICE_PER_DAY - BIGGEST_DISCOUNT;
  }

  if (days >= SMALLEST_DAYS) {
    return PRICE_PER_DAY - SMALLEST_DISCOUNT;
  }

  return PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
