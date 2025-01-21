/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_OF_RENT = 40;
  let totalCost = days * PRICE_OF_RENT;
  const SHORT_TERM = 3;
  const SMALL_DISCOUNT = 20;
  const LONG_TERM = 7;
  const BIG_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return totalCost;
  }

  if (days < LONG_TERM) {
    totalCost = totalCost - SMALL_DISCOUNT;

    return totalCost;
  }

  totalCost = totalCost - BIG_DISCOUNT;

  return totalCost;
}

module.exports = calculateRentalCost;
