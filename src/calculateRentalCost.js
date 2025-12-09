/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_CAR_RENT = 7;
  const LONG_CAR_RENT_DISCOUNT = 50;
  const SHORT_CAR_RENT = 3;
  const SHORT_CAR_RENT_DISCOUNT = 20;

  if (days >= LONG_CAR_RENT) {
    return PRICE_PER_DAY * days - LONG_CAR_RENT_DISCOUNT;
  }

  if (days >= SHORT_CAR_RENT) {
    return PRICE_PER_DAY * days - SHORT_CAR_RENT_DISCOUNT;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
