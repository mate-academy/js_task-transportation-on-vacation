/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE = 40;
  const LONG_DAYS = 7;
  const SHORT_DAYS = 3;
  const LONG_DAYS_DISCOUNT = 50;
  const SHORT_DAYS_DISCOUNT = 20;
  const price = days * RENT_PRICE;

  if (days >= LONG_DAYS) {
    return price - LONG_DAYS_DISCOUNT;
  }

  if (days >= SHORT_DAYS) {
    return price - SHORT_DAYS_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
