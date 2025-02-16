/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_FOR_RENT = 40;

  const AMOUNT_DAY_FOR_MIN_DISCOUNT = 3;
  const AMOUNT_DAY_FOR_MAX_DISCOUNT = 7;

  const MIN_DISCOUNT = 20;
  const MAX_DISCOUNT = 50;

  if (days >= AMOUNT_DAY_FOR_MAX_DISCOUNT) {
    return PRICE_FOR_RENT * days - MAX_DISCOUNT;
  }

  if (days >= AMOUNT_DAY_FOR_MIN_DISCOUNT) {
    return PRICE_FOR_RENT * days - MIN_DISCOUNT;
  }

  return PRICE_FOR_RENT * days;
}

module.exports = calculateRentalCost;
