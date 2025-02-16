/**
 * @param {number} days
 *
 * @return {number}
 */
const LONG_TERM_DISCOUNT = 50;
const THREE_DAYS_DISCOUNT = 3;
const SHORT_TERM_DISCOUNT = 20;
const SEVEN_DAYS_DISCOUNT = 7;
const PRICE_FOR_ONE_DAY = 40;

function calculateRentalCost(days) {
  // write code here

  const TOTAL_PRICE = PRICE_FOR_ONE_DAY * days;

  if (days >= SEVEN_DAYS_DISCOUNT) {
    return TOTAL_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= THREE_DAYS_DISCOUNT && days < SEVEN_DAYS_DISCOUNT) {
    return TOTAL_PRICE - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
