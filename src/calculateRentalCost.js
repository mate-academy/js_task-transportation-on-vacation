/**
 * @param {number} days
 *
 * @return {number}
 */
const basePrice = 40;

const BASIC_TERM = 3;
const BASIC_TERM_DISCOUNT = 20;

const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return basePrice * days - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_TERM) {
    return basePrice * days - BASIC_TERM_DISCOUNT;
  }

  if (days < BASIC_TERM) {
    return basePrice * days;
  }


  return 40;
}

module.exports = calculateRentalCost;
