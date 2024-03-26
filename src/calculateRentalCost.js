/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const MAXIMUM_DISCOUNT = 50;
  const MINIMUM_DISCOUNT = 20;
  const REGULAR_PRICE = days * DAILY_PRICE;

  if (days >= 7) {
    return (REGULAR_PRICE - MAXIMUM_DISCOUNT);
  }

  if (days >= 3 && days < 7) {
    return (REGULAR_PRICE - MINIMUM_DISCOUNT);
  }

  return (REGULAR_PRICE);
}

module.exports = calculateRentalCost;
