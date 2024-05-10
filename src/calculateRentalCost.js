/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const CONST_ONE_DAY = 40;
  const RENT_FOR_7_DAYS = 7;
  const RENT_FOR_3_DAYS = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= RENT_FOR_7_DAYS) {
    return CONST_ONE_DAY * days - LONG_TERM_DISCOUNT;
  }

  if (days >= RENT_FOR_3_DAYS && days <= 6) {
    return CONST_ONE_DAY * days - SHORT_TERM_DISCOUNT;
  }

  if (days < 3) {
    return CONST_ONE_DAY * days;
  }
}

module.exports = calculateRentalCost;
