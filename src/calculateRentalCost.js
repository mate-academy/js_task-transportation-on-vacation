/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const MEDIUM_TERM_RENTAL_DAYS = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;
  const totalPrice = days * COST_PER_DAY;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_RENTAL_DAYS) {
    return totalPrice - MEDIUM_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
