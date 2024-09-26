/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TIME = 3;
  const LONG_TIME = 7;
  const RENT = 40;
  const DISCOUNT = 20;
  const MAX_DISCOUNT = 50;

  if (days >= LONG_TIME) {
    return days * RENT - MAX_DISCOUNT;
  } else if (days >= SHORT_TIME) {
    return days * RENT - DISCOUNT;
  }

  return days * RENT;
}
module.exports = calculateRentalCost;
