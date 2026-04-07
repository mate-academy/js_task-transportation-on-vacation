/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = days;
  const TOTAL_DAYS = 40 * days;

  if (LONG_TERM < 3) {
    return TOTAL_DAYS;
  }

  if (LONG_TERM >= 7) {
    return TOTAL_DAYS - 50;
  }

  if (LONG_TERM >= 3 || LONG_TERM <= 6) {
    return TOTAL_DAYS - 20;
  }
}

module.exports = calculateRentalCost;
