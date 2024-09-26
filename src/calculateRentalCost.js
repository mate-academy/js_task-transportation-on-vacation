/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const DISCOUNT_LEVEL_1 = 20;
  const DISCOUNT_LEVEL_2 = 50;

  if (days >= 7) {
    return days * DAY_PRICE - DISCOUNT_LEVEL_2;
  }

  if (days >= 3) {
    return days * DAY_PRICE - DISCOUNT_LEVEL_1;
  }

  return days * DAY_PRICE;
};

module.exports = calculateRentalCost;
