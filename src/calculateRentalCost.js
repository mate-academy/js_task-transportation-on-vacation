/**
 * @param {number} days
 *
 * @return {number}
 */
const DAY_RENT = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const MIDDLE_TERM = 3;
const MIDDLE_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const fullRent = days * DAY_RENT;

  if (days >= LONG_TERM) {
    return fullRent - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return fullRent - MIDDLE_TERM_DISCOUNT;
  }

  return fullRent;
}

module.exports = calculateRentalCost;
