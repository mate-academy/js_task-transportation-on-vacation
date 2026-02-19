/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const WEEKLY_DISCOUNT = 50;
  const THREE_DAY_DISCOUNT = 20;

  const basePrice = days * DAILY_PRICE;

  if (days >= 7) {
    return basePrice - WEEKLY_DISCOUNT;
  }

  if (days >= 3) {
    return basePrice - THREE_DAY_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
