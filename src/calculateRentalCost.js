/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const LONG_RENT = 7;
  const LONG_RENT_DISCOUNT = 50;
  const SHORT_RENT = 3;
  const SHORT_RENT_DISCOUNT = 20;

  const PRE_DISCOUNT_PRICE = RENT_PER_DAY * days;

  if (days >= SHORT_RENT) {
    return PRE_DISCOUNT_PRICE - SHORT_RENT_DISCOUNT;
  }

  if (days >= LONG_RENT) {
    return PRE_DISCOUNT_PRICE - LONG_RENT_DISCOUNT;
  }

  return PRE_DISCOUNT_PRICE;
}

module.exports = calculateRentalCost;
