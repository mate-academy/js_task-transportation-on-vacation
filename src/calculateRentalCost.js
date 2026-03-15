/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return costPerDay * days;
  }

  if (days < LONG_TERM) {
    return costPerDay * days - SHORT_TERM_DISCOUNT;
  }

  return costPerDay * days - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
