/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const price = PRICE_PER_DAY * days;

  if (days >= 7) {
    return price - 50;
  }

  if (days >= 3) {
    return price - 20;
  }

  return price;
}

module.exports = calculateRentalCost;
