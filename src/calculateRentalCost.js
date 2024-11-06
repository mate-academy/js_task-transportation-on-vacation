/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_LEASE = 7;
  const LONG_LEASE_DISCONT = 50;
  const AVERAGE_LEASE = 3;
  const AVERAGE_LEASE_DISCONT = 20;
  const PRICE_FOR_DAY = 40;
  const price = days * PRICE_FOR_DAY;

  if (days >= LONG_LEASE) {
    return price - LONG_LEASE_DISCONT;
  }

  if (days >= AVERAGE_LEASE) {
    return price - AVERAGE_LEASE_DISCONT;
  }

  return price;
}

module.exports = calculateRentalCost;
