/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentcost = 40;
  if (days < 3) {
    return days * rentcost;
  }
  if (days < 7) {
    return days * rentcost - 20;
  }
  return days * rentcost - 50;
}

module.exports = calculateRentalCost;
