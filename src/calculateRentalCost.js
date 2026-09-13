/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const result = days * 40;

  if (days >= 7) {
    return result - 50;
  }

  return days >= 3 ? result - 20 : result;
}

module.exports = calculateRentalCost;
