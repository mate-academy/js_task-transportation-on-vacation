/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_DAY_VALUE = 40;
  const DISCOUNT_SHORT_TERM = 20;
  const DISCOUNT_LONG_TERM = 50;

  const MIDDLE_TERM = 3;
  const LONG_TERM = 7;

  const rentalCost = RENTAL_DAY_VALUE * days;

  if (days >= LONG_TERM) {
    return rentalCost - DISCOUNT_LONG_TERM;
  }

  if (days >= MIDDLE_TERM) {
    return rentalCost - DISCOUNT_SHORT_TERM;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
