/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  const PRICE = 40;

  const TOTAL = days * PRICE;

  if (days >= LONG_TERM) {
    return TOTAL - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return TOTAL - MID_TERM_DISCOUNT;
  }

  return TOTAL;
}

module.exports = calculateRentalCost;
