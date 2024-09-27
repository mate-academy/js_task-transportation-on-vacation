/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAY_RENT = 40;
  const SHORT_RENT_DISCOUNT = 20;
  const LONG_RENT_DISCOUNT = 50;
  const SHORT_RENT = 3;
  const LONG_RENT = 7;

  if (days >= LONG_RENT) {
    return DAY_RENT * days - LONG_RENT_DISCOUNT;
  }

  if (days >= SHORT_RENT) {
    return DAY_RENT * days - SHORT_RENT_DISCOUNT;
  }

  return DAY_RENT * days;
}
module.exports = calculateRentalCost;
