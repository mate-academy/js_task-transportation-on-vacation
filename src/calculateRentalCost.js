/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const count = days * 40;

  if (days >= 7) {
    return count - 50;
  }

  if (days >= 3) {
    return count - 20;
  }

  return count;
}

module.exports = calculateRentalCost;
