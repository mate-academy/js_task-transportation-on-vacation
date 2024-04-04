/* eslint-disable no-const-assign */
/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_7 = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_3 = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let Baseprice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_7) {
    return (Baseprice -= LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM_3) {
    return (Baseprice -= SHORT_TERM_DISCOUNT);
  }

  return days * PRICE_PER_DAY;
}
module.exports = calculateRentalCost;
