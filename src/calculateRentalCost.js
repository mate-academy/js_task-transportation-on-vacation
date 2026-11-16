/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_FOR_DAY = 40;
  const LONG_TERM_OFF = 50;
  const SHORT_TERM_OFF = 20;
  let totalAmount = days * COST_FOR_DAY;

  if (days >= 7) {
    totalAmount -= LONG_TERM_OFF;

    return totalAmount;
  }

  if (days >= 3) {
    totalAmount -= SHORT_TERM_OFF;

    return totalAmount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
