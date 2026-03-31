/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT_PRICE = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const totalRentCount = days * DAILY_RENT_PRICE;

  if (days >= LONG_TERM_DAYS) {
    return totalRentCount - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return totalRentCount - SHORT_TERM_DISCOUNT;
  }

  return totalRentCount;
}

module.exports = calculateRentalCost;
