/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  //   let result = 0;
  //   const rentDay = 40;
  //   const sum = rentDay * days;

  //   if (days >= 7) {
  //     result = sum - 50;
  //   } else if (days >= 3) {
  //     result = sum - 20;
  //   } else {
  //     return sum;
  //   }

  //   return result;
  // }
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}
module.exports = calculateRentalCost;
