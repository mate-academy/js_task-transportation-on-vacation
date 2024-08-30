/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT = 40;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;

  if (days < 3) {
    return days * DAY_RENT;
  }

  if (days < 7) {
    return days * DAY_RENT - SMALL_DISCOUNT;
  }

  return days * DAY_RENT - BIG_DISCOUNT;
}
module.exports = calculateRentalCost;
