/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CONST_ONE_DAY = 40;
  const RENT_FOR_7_DAYS = 7;
  const RENT_FOR_3_DAYS = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const basePrice = CONST_ONE_DAY * days;

  if (days >= RENT_FOR_7_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= RENT_FOR_3_DAYS && days < RENT_FOR_7_DAYS) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  if (days < RENT_FOR_3_DAYS) {
    return basePrice;
  }
}

module.exports = calculateRentalCost;
