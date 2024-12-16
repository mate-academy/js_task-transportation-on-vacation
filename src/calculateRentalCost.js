/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const rentalCost = days * COST_PER_DAY;
  let discount = 0;

  if (SHORT_TERM <= days) {
    discount = SHORT_TERM_DISCOUNT;
  }

  if (LONG_TERM <= days) {
    discount = LONG_TERM_DISCOUNT;
  }

  return rentalCost - discount;
}

module.exports = calculateRentalCost;
