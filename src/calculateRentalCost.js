/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const off = days >= 7 ? 50 : days >= 3 ? 20 : 0;

  return days * 40 - off;
}

module.exports = calculateRentalCost;
