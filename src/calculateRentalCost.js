/**
 * @param {number} days
 *
 * @return {number}
 */
// Terms
const LONG_TERM = 7;
const MIDDLE_TERM = 3;

const LONG_TERM_DISCOUNT = 50;
const MIDDLE_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days < MIDDLE_TERM) {
    return days * 40;
  }

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    return days * 40 - MIDDLE_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * 40 - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
