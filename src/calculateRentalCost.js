/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_SHORT = 3;
  const DAY_LONG = 7;
  const DAY_LONG_DISCOUNT = 50;
  const DAY_SHORT_DISCOUNT = 20;
  const RENT_ON_DAY = 40;

  if (days >= DAY_LONG) {
    return days * RENT_ON_DAY - DAY_LONG_DISCOUNT;
  }

  if (days >= DAY_SHORT) {
    return days * RENT_ON_DAY - DAY_SHORT_DISCOUNT;
  }

  return days * RENT_ON_DAY;
}

module.exports = calculateRentalCost;
