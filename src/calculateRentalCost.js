/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_OF_DAY = 40;
  const MID_TERM = 3;
  const LONG_TERM = 7;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  let total = days * PRICE_OF_DAY;

  if (days >= LONG_TERM) {
    total -= LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM) {
    total -= MID_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
