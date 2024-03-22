/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_RENT_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return days * ONE_DAY_RENT_COST;
  }

  if (days >= SHORT_TERM) {
    return ONE_DAY_RENT_COST * days - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * ONE_DAY_RENT_COST - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
