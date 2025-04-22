/**
 * @param {number} days
 *
 * @return {number}
 */
const RENT_PER_DAY = 40;

const SHORT_TERM = 3;
const SHORT_TERM_OFF = 20;

const LONG_TERM = 7;
const LONG_TERM_OFF = 50;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return RENT_PER_DAY * days - LONG_TERM_OFF;
  }

  if (days >= SHORT_TERM) {
    return RENT_PER_DAY * days - SHORT_TERM_OFF;
  }

  return RENT_PER_DAY * days;
}

module.exports = calculateRentalCost;
