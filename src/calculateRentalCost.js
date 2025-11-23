/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const DAY_RENT = 40;
  const MEDIUM_TERM = 3;
  const LONG_TERM = 7;

  if (days < MEDIUM_TERM) {
    return days * DAY_RENT;
  }

  if (days >= MEDIUM_TERM && days < LONG_TERM) {
    return days * DAY_RENT - SMALL_DISCOUNT;
  }

  return days * DAY_RENT - BIG_DISCOUNT;
}

module.exports = calculateRentalCost;
