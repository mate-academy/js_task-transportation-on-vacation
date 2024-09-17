/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const LONG_TERM_RENTAL = 7;
  const LONG_TERM_RENTAL_DISCOUNT = 50;
  const SHORT_TERM_RENTAL = 3;
  const SHORT_TERM_RENTAL_DISCOUNT = 20;
  const totalCost = RENT_PER_DAY * days;

  if (days >= LONG_TERM_RENTAL) {
    return totalCost - LONG_TERM_RENTAL_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL) {
    return totalCost - SHORT_TERM_RENTAL_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
