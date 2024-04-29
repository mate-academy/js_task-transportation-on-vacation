/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const total = rentCost * days;

  return days >= 7 ? total - 50
    : days >= 3 ? total - 20
      : total;
}

module.exports = calculateRentalCost;
