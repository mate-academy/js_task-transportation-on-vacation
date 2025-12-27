/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SAMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const DAILY_PRICE = 40;

  const totalRentalPrice = days * DAILY_PRICE;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return totalRentalPrice - SAMALL_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return totalRentalPrice - BIG_DISCOUNT;
  }

  return totalRentalPrice;
}

module.exports = calculateRentalCost;
