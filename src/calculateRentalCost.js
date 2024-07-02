/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = 0;

  if (days < 3) {
    total += days * 40;
  }

  if (days >= 3 && days < 7) {
    total += days * 40 - 20;
  }

  if (days >= 7) {
    total += days * 40 - 50;
  }

  return total;
}

module.exports = calculateRentalCost;
