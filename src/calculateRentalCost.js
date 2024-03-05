/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTALCOST = 40 * days;
  const SHORT_DAYS = 3;
  const LONG_DAYS = 7;

  if (days < SHORT_DAYS) {
    return RENTALCOST;
  }

  if (days < LONG_DAYS) {
    return RENTALCOST - 20;
  }

  return RENTALCOST - 50;
}

module.exports = calculateRentalCost;
