/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const taxPerDay = 40;

  if (days >= 7) {
    return days * taxPerDay - 50;
  }

  if (days >= 3) {
    return days * taxPerDay - 20;
  }

  return days * taxPerDay;
}

module.exports = calculateRentalCost;
