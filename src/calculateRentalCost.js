/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const ONE_DAY_PAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const DISCOUNT_FOR_SHORT_TERM = 20;
  const DISCOUNT_FOR_LONG_TERM = 50;

  let RENTAL_PAY = ONE_DAY_PAY * days;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    RENTAL_PAY -= DISCOUNT_FOR_SHORT_TERM;
  }

  if (days >= LONG_TERM) {
    RENTAL_PAY -= DISCOUNT_FOR_LONG_TERM;
  }

  return RENTAL_PAY;
}

module.exports = calculateRentalCost;
