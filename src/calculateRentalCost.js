/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const DAY_COST = 40;

  switch (true) {
    case days >= SHORT_TERM && days < LONG_TERM:
      return days * DAY_COST - SHORT_TERM_DISCOUNT;

    case days >= LONG_TERM:
      return days * DAY_COST - LONG_TERM_DISCOUNT;

    default:
      return days * DAY_COST;
  }
}

module.exports = calculateRentalCost;
