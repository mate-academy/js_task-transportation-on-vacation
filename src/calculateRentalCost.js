const LITTLE_PRICE_OFF = 20;
const BIG_PRICE_OFF = 50;
const PRICE_PER_ONE_DAY = 40;
const DAYS_FOR_LITTLE__PRICE_OFF = 3;
const DAYS_FOR_BIG__PRICE_OFF = 7;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const finalPrice = days * PRICE_PER_ONE_DAY;

  if (days < DAYS_FOR_LITTLE__PRICE_OFF) {
    return finalPrice;
  }

  if (days >= DAYS_FOR_LITTLE__PRICE_OFF && days < DAYS_FOR_BIG__PRICE_OFF) {
    return finalPrice - LITTLE_PRICE_OFF;
  }

  return finalPrice - BIG_PRICE_OFF;
}

module.exports = calculateRentalCost;
