/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const BASE_PRICE = DAYS * 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (numberOfDays >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  } else if (numberOfDays >= SHORT_TERM)
    return (basePrice = SHORT_TERM_DISCOUNT);

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
