/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return DAILY_RENTAL_COST * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return DAILY_RENTAL_COST * days - SHORT_TERM_DISCOUNT;
  }

  return DAILY_RENTAL_COST * days;
}

module.exports = calculateRentalCost;
