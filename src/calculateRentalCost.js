/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const MIDDLE_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM_DISCOUNT = 20;
  const COST_PER_DAY = 40;

  let rentalCost = COST_PER_DAY * days;

  if (days >= LONG_TERM) {
    rentalCost -= LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    rentalCost -= MIDDLE_TERM_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
