/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_7_DAYS = 230;
  const PRICE_6_DAYS = 220;
  const PRICE_3_DAYS = 100;
  const DEFAULT_PRICE = 80;

  const DAYS_7 = 7;
  const DAYS_6 = 6;
  const DAYS_3 = 3;

  if (days === DAYS_7) {
    return PRICE_7_DAYS;
  }

  if (days === DAYS_6) {
    return PRICE_6_DAYS;
  }

  if (days === DAYS_3) {
    return PRICE_3_DAYS;
  }

  return DEFAULT_PRICE;
}

module.exports = calculateRentalCost;
