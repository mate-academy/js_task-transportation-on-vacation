/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  const totalCost = days * PRICE_PER_DAY;

  if (days >= MID_TERM && days < LONG_TERM) {
    return totalCost - MID_TERM_DISCOUNT;
  } else if (days >= LONG_TERM) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
