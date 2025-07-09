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

  const totalCost = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return totalCost - MID_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
