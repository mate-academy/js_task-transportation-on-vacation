/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalValue = days * 40;

  if (days >= 3 && days < 7) {
    totalValue = days * 40 - 20;
  } else if (days >= 7) {
    totalValue = days * 40 - 50;
  }

  return totalValue;
}

module.exports = calculateRentalCost;
