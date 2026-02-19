/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const WEEKLY_DISCOUNT = 50;
  const THREE_DAY_DISCOUNT = 20;
  const WEEKLY_THRESHOLD = 7;
  const THREE_DAY_THRESHOLD = 3;

  const basePrice = days * DAILY_PRICE;

  if (days >= WEEKLY_THRESHOLD) {
    return basePrice - WEEKLY_DISCOUNT;
  }

  if (days >= THREE_DAY_THRESHOLD) {
    return basePrice - THREE_DAY_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
