const DAILY_RATE = 40;
const LONG_TERM_DISCOUNT = 50;
const LONG_TERM_THRESHOLD = 7;
const MEDIUM_TERM_DISCOUNT = 20;
const MEDIUM_TERM_THRESHOLD = 3;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalPrice = days * DAILY_RATE;

  if (days >= LONG_TERM_THRESHOLD) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_THRESHOLD) {
    return totalPrice - MEDIUM_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
