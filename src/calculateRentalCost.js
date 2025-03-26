/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  let result = DAILY_RATE * days;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    result = result - LONG_TERM_DISCOUNT;
  } else if (days >= MEDIUM_TERM) {
    result = result - MEDIUM_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
