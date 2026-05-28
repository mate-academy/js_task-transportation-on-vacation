/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RATE = 40;
  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;

  const rent = days * DAY_RATE;

  if (days >= LONG_TERM) {
    return rent - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return rent - SHORT_DISCOUNT;
  }

  return rent;
}

module.exports = calculateRentalCost;
