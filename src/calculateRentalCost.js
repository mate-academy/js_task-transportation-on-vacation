/**
 * @param {number} days
 *
 * @return {number}
 */
const DAY_CAR_RENT = 40;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return days * DAY_CAR_RENT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * DAY_CAR_RENT - SHORT_TERM_DISCOUNT;
  }

  return days * DAY_CAR_RENT;
}

module.exports = calculateRentalCost;
