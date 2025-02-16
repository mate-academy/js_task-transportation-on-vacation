/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const rentalCost = days * DAY_COST;

  if (days >= LONG_TERM) {
    return rentalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return rentalCost - MIDDLE_TERM_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
