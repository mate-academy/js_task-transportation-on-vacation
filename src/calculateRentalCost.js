/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTALCOST = 40 * days;
  const SHORT_DAYS = 3;
  const LONG_DAYS = 7;
  const DISCOUNT_SHORT_DAYS = 20;
  const DISCOUNT_LONG_DAYS = 50;

  if (days >= LONG_DAYS) {
    return RENTALCOST - DISCOUNT_LONG_DAYS;
  }

  if (days >= SHORT_DAYS) {
    return RENTALCOST - DISCOUNT_SHORT_DAYS;
  }

  return RENTALCOST;
}

module.exports = calculateRentalCost;
