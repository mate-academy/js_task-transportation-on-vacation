/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentValue = 40;
  const basicRent = rentValue * days;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < 3) {
    return basicRent;
  }

  if (days < 7) {
    return basicRent - SHORT_TERM_DISCOUNT;
  }

  return basicRent - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
