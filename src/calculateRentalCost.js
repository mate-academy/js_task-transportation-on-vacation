/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const PRICE_OF_RENT_PER_DAY = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const sumOfMoney = days * PRICE_OF_RENT_PER_DAY;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return sumOfMoney - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return sumOfMoney - LONG_TERM_DISCOUNT;
  }

  return sumOfMoney;
}

module.exports = calculateRentalCost;
