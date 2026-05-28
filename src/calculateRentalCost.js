/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const RENTAL_COST_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const rentalCost = RENTAL_COST_PER_DAY * days;
  let totalCost = 0;

  if (days < SHORT_TERM) {
    totalCost = rentalCost;
  } else if (days < LONG_TERM) {
    totalCost = rentalCost - SHORT_TERM_DISCOUNT;
  } else if (days >= LONG_TERM) {
    totalCost = rentalCost - LONG_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
