/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MINIMAL_TERM = 3;
  const BASIC_TERM = 6;
  const LONG_TERM_DISCOUNT = 50;
  const BASIC_DISCOUNT = 20;

  if (days < MINIMAL_TERM) {
    return days * 40;
  }

  if (days >= MINIMAL_TERM && days <= BASIC_TERM) {
    return (days * 40) - BASIC_DISCOUNT;
  }

  return (days * 40) - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
