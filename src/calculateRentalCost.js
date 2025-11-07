/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAY_RENTAL = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days === LONG_TERM || days > LONG_TERM) {
    return days * DAY_RENTAL - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * DAY_RENTAL - SHORT_TERM_DISCOUNT;
  }

  if (days < SHORT_TERM) {
    return days * DAY_RENTAL;
  }
}

module.exports = calculateRentalCost;
