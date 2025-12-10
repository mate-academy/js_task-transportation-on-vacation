/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;

  const DAYS_FOR_LONG_TERM_DISCOUNT = 7;
  const DAYS_FOR_MID_TERM_DISCOUNT = 3;

  const DISCOUNT_FOR_7_DAYS = 50;
  const DISCOUNT_FOR_3_DAYS = 20;

  const totalCost = days * PRICE_PER_DAY;

  if (days >= DAYS_FOR_LONG_TERM_DISCOUNT) {
    return totalCost - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= DAYS_FOR_MID_TERM_DISCOUNT) {
    return totalCost - DISCOUNT_FOR_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
