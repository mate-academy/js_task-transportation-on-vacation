/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const DISCOUNT_3_TO_6_DAYS = 20;
  const DISCOUNT_MORE_THAN_6_DAYS = 50;

  if (days < 3) {
    return PRICE_PER_DAY * days;
  }

  if (days <= 6) {
    return PRICE_PER_DAY * days - DISCOUNT_3_TO_6_DAYS;
  }

  return PRICE_PER_DAY * days - DISCOUNT_MORE_THAN_6_DAYS;
}

module.exports = calculateRentalCost;
