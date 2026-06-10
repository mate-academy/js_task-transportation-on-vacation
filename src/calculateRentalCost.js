/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const REGULAR_PAY = 40;
  const SMALL_SALE = 20;
  const BIG_SALE = 50;

  const MIN_DAYS_FOR_SMALL_SALE = 3;
  const MIN_DAYS_FOR_BIG_SALE = 7;

  const basePrice = days * REGULAR_PAY;

  if (days >= MIN_DAYS_FOR_SMALL_SALE && days < MIN_DAYS_FOR_BIG_SALE) {
    return basePrice - SMALL_SALE;
  }

  if (days >= MIN_DAYS_FOR_SMALL_SALE && days >= MIN_DAYS_FOR_BIG_SALE) {
    return basePrice - BIG_SALE;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
