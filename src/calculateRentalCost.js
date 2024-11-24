/**
 * @param {number} days
 *
 * @return {number}
 */
const SMALL_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  let total = 40 * days;

  if (days >= 7) {
    total = total - LONG_TERM_DISCOUNT;
  } else if (days >= 3 && days < 7) {
    total = total - SMALL_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
