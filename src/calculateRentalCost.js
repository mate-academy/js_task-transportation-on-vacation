/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const price = days * DAILY_PRICE;

  if (days >= 7) {
    return price - 50;
  }

  if (days === 6) {
    return price - 20;
  }

  if (days >= 3 && days <= 5) {
    return price - 20;
  }

  return price;
}

module.exports = calculateRentalCost;
