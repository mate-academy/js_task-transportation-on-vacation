/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE = 40;
  const LONG_DAYS = 7;
  const SHORT_DAYS = 3;
  const price = days * RENT_PRICE;

  if (days >= LONG_DAYS) {
    return price - 50;
  }

  if (days >= SHORT_DAYS) {
    return price - 20;
  }

  return price;
}

module.exports = calculateRentalCost;
