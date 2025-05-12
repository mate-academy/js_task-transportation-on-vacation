/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = days * 40;

  if (days === 0) {
    return 0;
  }

  if (days >= 7) {
    return days * 40 - 50;
  }

  if (days >= 3 && days < 7) {
    return total * 0.8;
  }

  return days * 40;
}

module.exports = calculateRentalCost;
