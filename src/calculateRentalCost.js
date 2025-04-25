/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_COST = 40;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM = 7;
  const MIN_MIDDLE_TERM = 3;
  const MAX_MIDDLE_TERM = 6;
  let discount = 0;

  if (days >= MIN_MIDDLE_TERM && days <= MAX_MIDDLE_TERM) {
    discount = MIDDLE_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    discount = LONG_TERM_DISCOUNT;
  }

  return days * ONE_DAY_COST - discount;
}

module.exports = calculateRentalCost;
