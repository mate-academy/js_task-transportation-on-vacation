/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;

  const LONG_TERM = 7;

  const RENT_FOR_DAY = 40;

  const SMALL_DISCOUNT = 20;

  const BIG_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return days * RENT_FOR_DAY;
  }

  if (days < LONG_TERM) {
    return days * RENT_FOR_DAY - SMALL_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * RENT_FOR_DAY - BIG_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
