/**
 * @param {number} days
 *
 * @return {number}
 */
const DAY_RENT_PRICE = 40;
const DISCOUNT_OVER_6_DAYS = 50;
const DISCOUNT_OVER_2_DAYS = 20;
const DAYS_FOR_SMALL_DISCOUNT = 2;
const DAYS_FOR_BIG_DISCOUNT = 6;

function calculateRentalCost(days) {
  let basePrice = days * DAY_RENT_PRICE;

  if (days > DAYS_FOR_BIG_DISCOUNT) {
    return (basePrice -= DISCOUNT_OVER_6_DAYS);
  }

  if (days > DAYS_FOR_SMALL_DISCOUNT) {
    return (basePrice -= DISCOUNT_OVER_2_DAYS);
  }

  return basePrice;
}

module.exports = calculateRentalCost;
