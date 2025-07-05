/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const RENT_COST = days * DAY_PRICE;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days > LONG_TERM - 1) {
    return RENT_COST - LONG_TERM_DISCOUNT;
  }

  if (days > SHORT_TERM - 1) {
    return RENT_COST - SHORT_TERM_DISCOUNT;
  }

  return RENT_COST;
}

module.exports = calculateRentalCost;
