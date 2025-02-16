/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MEDIUM_TERM = 3;
  const MEDIUM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return rentCost * days - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return rentCost * days - MEDIUM_DISCOUNT;
  }

  return rentCost * days;
}

module.exports = calculateRentalCost;
