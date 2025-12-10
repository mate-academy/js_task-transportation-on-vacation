/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const DISCOUNT_FOR_7_DAYS = 50;
  const DISCOUNT_FOR_3_DAYS = 20;

  const totalCost = days * PRICE_PER_DAY;

  if (days >= 7) {
    return totalCost - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= 3) {
    return totalCost - DISCOUNT_FOR_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
