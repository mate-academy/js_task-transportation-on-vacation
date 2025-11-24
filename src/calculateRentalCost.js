/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;

  const HIGH_DISCOUNT_THRESHOLD = 7;
  const HIGH_DISCOUNT_AMOUNT = 50;

  const LOW_DISCOUNT_THRESHOLD = 3;
  const LOW_DISCOUNT_AMOUNT = 20;

  const baseCost = days * DAILY_RATE;

  if (days >= HIGH_DISCOUNT_THRESHOLD) {
    return baseCost - HIGH_DISCOUNT_AMOUNT;
  }

  if (days >= LOW_DISCOUNT_THRESHOLD) {
    return baseCost - LOW_DISCOUNT_AMOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
