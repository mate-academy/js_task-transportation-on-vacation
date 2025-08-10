/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_PRICE = 40;
  const FULL_TERM = 7;
  const FULL_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let basePrice = days * ONE_DAY_PRICE;
  

  if (days >= FULL_TERM) {
   return  basePrice - FULL_TERM_DISCOUNT;
  }

  if ( days >= SHORT_TERM) {
    return  basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice ;
}

module.exports = calculateRentalCost;
