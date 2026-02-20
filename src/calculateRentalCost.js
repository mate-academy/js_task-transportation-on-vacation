/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_COST = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;
  const SHORT_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;

  if (days >= LONG_TERM_DAYS) {
    return RENTAL_COST * days - DISCOUNT_7_DAYS;
  }

  if (days >= SHORT_TERM_DAYS) {
    return RENTAL_COST * days - DISCOUNT_3_DAYS;
  }

  return RENTAL_COST * days;
}

module.exports = calculateRentalCost;
