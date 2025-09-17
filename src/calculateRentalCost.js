/**
 * @param {number} days
 *
 * @return {number}
 */
const RENT_PER_DAY = 40;
const MIDDLE_TERM = 3;
const MIDDLE_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const RENT = RENT_PER_DAY * days;

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    return RENT - MIDDLE_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return RENT - LONG_TERM_DISCOUNT;
  }

  return RENT;
}

module.exports = calculateRentalCost;
