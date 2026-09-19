/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const total = days * RENT_PER_DAY;

  if (days >= 7) {
    return total - 50;
  }

  if (days >= 3) {
    return total - 20;
  }

  return total;
}

module.exports = calculateRentalCost;
