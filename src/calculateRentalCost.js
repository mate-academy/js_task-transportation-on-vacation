/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40 * days;

  return days < 3 ? cost
    : days < 7 ? cost - 20
      : cost - 50;
}

module.exports = calculateRentalCost;
