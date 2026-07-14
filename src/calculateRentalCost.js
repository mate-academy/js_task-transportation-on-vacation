/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const BASIC_DISCOUNT_DAY = 3;
  const BASIC_DISCOUNT = 20;
  const ADDITIONAL_DISCOUNT_DAYS = 7;
  const ADDITIONAL_DISCOUNT = 50;

  if (days >= ADDITIONAL_DISCOUNT_DAYS) {
    return days * PRICE_PER_DAY - ADDITIONAL_DISCOUNT;
  }

  if (days >= BASIC_DISCOUNT_DAY) {
    return days * PRICE_PER_DAY - BASIC_DISCOUNT;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
