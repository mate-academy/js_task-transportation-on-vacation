/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST = 40;
  const DISCOUNT_FEW_DAYS = 20;
  const DISCOUNT_WEEK = 50;
  const MEDIUM_TERM_RENTAL_DAYS = 3;
  const LONG_TERM_RENTAL_DAYS = 7;
  const TOTAL_PRICE = COST * days;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return TOTAL_PRICE - DISCOUNT_WEEK;
  }

  if (days >= MEDIUM_TERM_RENTAL_DAYS) {
    return TOTAL_PRICE - DISCOUNT_FEW_DAYS;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
