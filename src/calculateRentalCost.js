/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daySum = days * 40;

  if (days >= 3 && days < 7) {
    return daySum - 20;
  }

  if (days >= 7) {
    return daySum - 50;
  }

  return daySum;
}

module.exports = calculateRentalCost;
