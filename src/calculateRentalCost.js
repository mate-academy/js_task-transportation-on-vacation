/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  let PRICE_ALL = PRICE_PER_DAY * days;
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;
  const SHORT = 3;
  const LONG = 7;


  if (days >= LONG) {
    return  PRICE_ALL - LONG_DISCOUNT;
  }

  if (days >= SHORT) {
    return PRICE_ALL - SHORT_DISCOUNT;
  }

  if (days < SHORT) {
    return PRICE_ALL;
  }
}


module.exports = calculateRentalCost;
