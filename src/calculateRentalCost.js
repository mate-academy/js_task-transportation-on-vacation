/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE = 40;
  const sum = days * PRICE;

  if (days >= 7) {
    return sum - 50;
  }

  if (days >= 3) {
    return sum - 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
