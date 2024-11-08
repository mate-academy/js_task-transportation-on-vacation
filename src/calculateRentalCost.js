/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = days * 40;
  let totalCost = price;

  if (days >= 7) {
    totalCost = price - 50;
  }

  if (days >= 3 && days < 7) {
    totalCost = price - 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
