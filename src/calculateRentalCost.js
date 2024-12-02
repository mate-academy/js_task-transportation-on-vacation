/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;
  const TOTAL_PRICE = days * PRICE_PER_DAY;

  switch (true) {
    case days >= LONG_TERM:
      return TOTAL_PRICE - LONG_TERM_DISCOUNT;
    case days >= MID_TERM:
      return TOTAL_PRICE - MID_TERM_DISCOUNT;
    default:
      return TOTAL_PRICE;
  }
}

module.exports = calculateRentalCost;
