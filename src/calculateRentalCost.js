/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_COST = 40;

  if (days < 3) {
    return days * BASE_COST;
  } else if (days < 7) {
    return days * BASE_COST - 20;
  } else {
    return days * BASE_COST - 50;
  }
}

module.exports = calculateRentalCost;
