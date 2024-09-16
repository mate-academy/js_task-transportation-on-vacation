/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const standardPrice = days * pricePerDay;

  if (days >= LONG_TERM) {
    return standardPrice - 50;
  }

  if (days >= SHORT_TERM) {
    return standardPrice - 20;
  }

  return standardPrice;
}

module.exports = calculateRentalCost;
