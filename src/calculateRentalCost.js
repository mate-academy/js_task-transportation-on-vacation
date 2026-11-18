/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const totalPrice = numberOfDays * DAILY_PRICE;

  if (numberOfDays >= LONG_TERM_DAYS) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM_DAYS) {
    return totalPrice - SHORT_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
