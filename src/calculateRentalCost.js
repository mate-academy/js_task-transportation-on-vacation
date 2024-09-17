/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT_COST = 40;
  const LONG_RENT_DAYS = 7;
  const LONG_RENT_DISCOUNT = 50;
  const SHORT_RENT_DAYS = 3;
  const SHORT_RENT_DISCOUNT = 20;

  const price = days * DAY_RENT_COST;

  if (days >= LONG_RENT_DAYS) {
    return price - LONG_RENT_DISCOUNT;
  }

  if (days >= SHORT_RENT_DAYS) {
    return price - SHORT_RENT_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
