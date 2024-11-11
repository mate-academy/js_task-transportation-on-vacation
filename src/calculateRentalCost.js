/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const basePrice = 50;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM;
  }

  const LONG_TERM = 
}

module.exports = calculateRentalCost;
