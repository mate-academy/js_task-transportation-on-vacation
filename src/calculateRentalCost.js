/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DICOUNT = 20;
  const totalCost = PRICE_PER_DAY * days;

  if (days >= 7) {
    return totalCost - LONG_TERM_DISCOUNT;
  } else if (days >= 3) {
    return totalCost - SHORT_TERM_DICOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
