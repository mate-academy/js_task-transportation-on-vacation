/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;

  return PRICE_PER_DAY * days - calculateDiscount(days);
}

function calculateDiscount(days) {
  const DISCOUNT_HIGHT = 50;
  const DISCOUNT_LOW = 20;

  const DAYS_HIGHT_DISCOUNT = 7;
  const DAYS_LOW_DISCOUNT = 3;

  if (days >= DAYS_HIGHT_DISCOUNT) {
    return DISCOUNT_HIGHT;
  }

  if (days >= DAYS_LOW_DISCOUNT) {
    return DISCOUNT_LOW;
  }

  return 0;
}

module.exports = calculateRentalCost;
