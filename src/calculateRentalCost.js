/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const THRESHOLD_SEVEN_DAYS = 7;
  const DISCOUNT_SEVEN_DAYS = 50;
  const THRESHOLD_THREE_DAYS = 3;
  const DISCOUNT_THREE_DAYS = 20;
  const baseCost = DAILY_RATE * days;

  if (days >= THRESHOLD_SEVEN_DAYS) {
    return baseCost - DISCOUNT_SEVEN_DAYS;
  }

  if (days >= THRESHOLD_THREE_DAYS && days < THRESHOLD_SEVEN_DAYS) {
    return baseCost - DISCOUNT_THREE_DAYS;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
