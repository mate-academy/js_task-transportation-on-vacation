/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT_PRICE = 40;
  const DISCOUNT_OVER_6_DAYS = 50;
  const DISCOUNT_OVER_2_DAYS = 20;
  let basePrice = days * DAY_RENT_PRICE;

  if (days > 6) {
    return (basePrice -= DISCOUNT_OVER_6_DAYS);
  }

  if (days > 2) {
    return (basePrice -= DISCOUNT_OVER_2_DAYS);
  }

  return basePrice;
}

module.exports = calculateRentalCost;
