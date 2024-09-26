/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const FIX_PRICE = 40;
  const DISCOUNT_VALUE_MORE_3_DAYS = 20;
  const DISCOUNT_VALUE_MORE_7_DAYS = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const BASIC_RENT = days * FIX_PRICE;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return BASIC_RENT - DISCOUNT_VALUE_MORE_3_DAYS;
  }

  if (days >= LONG_TERM) {
    return BASIC_RENT - DISCOUNT_VALUE_MORE_7_DAYS;
  }

  return BASIC_RENT;
}

module.exports = calculateRentalCost;
