/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const BASIC_DISCOUNT_DAYS = 3;
  const BASIC_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  const totalCost = days * DAILY_RENTAL_COST;

  if (days >= LONG_TERM_DISCOUNT_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_DISCOUNT_DAYS) {
    return totalCost - BASIC_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
