/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAY_RENT = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const LESS_TERM = 3;
  const LESS_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return (days * DAY_RENT) - LONG_TERM_DISCOUNT;
  }

  if (days >= LESS_TERM && days <= LONG_TERM) {
    return (days * DAY_RENT) - LESS_TERM_DISCOUNT;
  }

  return days * DAY_RENT;
}

module.exports = calculateRentalCost;
