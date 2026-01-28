/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_CAR_FEE = 40;
  const CALC_RENTAL_COST = days * DAILY_CAR_FEE;

  const LONG_TERM_RENT = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MEDIUM_TERM_RENT = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM_RENT) {
    return CALC_RENTAL_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_RENT) {
    return CALC_RENTAL_COST - MEDIUM_TERM_DISCOUNT;
  }

  return CALC_RENTAL_COST;
}

module.exports = calculateRentalCost;
