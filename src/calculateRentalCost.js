/**
 * @param {number} days
 *
 * @return {number}
 */
const DAY_PRICE = 40;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days < SHORT_TERM) {
    return days * DAY_PRICE;
  }

  if (days < LONG_TERM) {
    return DAY_PRICE * days - SHORT_TERM_DISCOUNT;
  }

  return DAY_PRICE * days - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
