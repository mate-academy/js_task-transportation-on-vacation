/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const PRISE_PER_DAY = 40;

  const daysPrice = PRISE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return daysPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return daysPrice - SHORT_TERM_DISCOUNT;
  }

  return daysPrice;
}

module.exports = calculateRentalCost;
